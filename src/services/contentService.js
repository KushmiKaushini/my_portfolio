import { defaultConfig } from '../models/defaultConfig'
import * as indexedDB from './indexedDB.js'
import { hashText } from './crypto.js'

const SECTION_KEYS = Object.keys(defaultConfig)

function mergeSection(defaultValue, storedValue) {
  if (storedValue == null) return defaultValue
  if (Array.isArray(defaultValue)) return storedValue
  if (typeof defaultValue === 'object') return { ...defaultValue, ...storedValue }
  return storedValue
}

export async function loadConfig() {
  const config = {}
  await Promise.all(SECTION_KEYS.map(async (sectionKey) => {
    const stored = await indexedDB.getSection(sectionKey)
    config[sectionKey] = mergeSection(defaultConfig[sectionKey], stored)
  }))
  return config
}

export async function initializeConfig() {
  const current = await loadConfig()
  await Promise.all(SECTION_KEYS.map(async (sectionKey) => {
    const stored = await indexedDB.getSection(sectionKey)
    if (stored == null) {
      await indexedDB.setSection(sectionKey, defaultConfig[sectionKey])
    }
  }))
  await initializeAdmin()
  return current
}

export async function updateSection(sectionKey, sectionData) {
  if (!SECTION_KEYS.includes(sectionKey)) {
    throw new Error(`Unknown section: ${sectionKey}`)
  }
  await indexedDB.setSection(sectionKey, sectionData)
  return sectionData
}

export async function exportConfig() {
  const config = await loadConfig()
  return JSON.stringify(config, null, 2)
}

export async function importConfig(jsonString) {
  const parsed = JSON.parse(jsonString)
  await Promise.all(SECTION_KEYS.map(async (sectionKey) => {
    if (parsed[sectionKey] !== undefined) {
      await indexedDB.setSection(sectionKey, parsed[sectionKey])
    }
  }))
  return await loadConfig()
}

export async function resetConfig() {
  await Promise.all(SECTION_KEYS.map(async (sectionKey) => {
    await indexedDB.setSection(sectionKey, defaultConfig[sectionKey])
  }))
  await initializeAdmin()
  return await loadConfig()
}

export async function initializeAdmin() {
  const adminRecord = await indexedDB.getAdminCredentials()
  const usernameHash = await hashText(defaultConfig.admin.defaultUsername)
  const passwordHash = await hashText(defaultConfig.admin.defaultPassword)

  if (!adminRecord) {
    await indexedDB.setAdminCredentials({ usernameHash, passwordHash })
    return
  }

  // If the default credentials changed in code, overwrite stale stored hashes.
  if (adminRecord.usernameHash !== usernameHash || adminRecord.passwordHash !== passwordHash) {
    await indexedDB.setAdminCredentials({ usernameHash, passwordHash })
  }
}

export async function verifyAdminLogin(username, password) {
  const credentials = await indexedDB.getAdminCredentials()
  if (!credentials) return false
  const usernameHash = await hashText(username)
  const passwordHash = await hashText(password)
  return credentials.usernameHash === usernameHash && credentials.passwordHash === passwordHash
}
