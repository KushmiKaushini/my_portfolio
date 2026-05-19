import { defaultConfig } from '../models/defaultConfig.js'
import * as indexedDB from './indexedDB.js'
import { hashText } from './crypto.js'

// Get credentials from environment variables
const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD

if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
  console.warn('Admin credentials not configured. Admin panel will not work.')
}

// Get admin config from environment
const ADMIN_TRIGGER_KEYWORD = import.meta.env.VITE_ADMIN_TRIGGER_KEYWORD || defaultConfig.admin.triggerKeyword

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
  // Use stored hashes or create new ones from environment/config
  const usernameHash = await hashText(ADMIN_USERNAME)
  const passwordHash = await hashText(ADMIN_PASSWORD)

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

// Helper to get admin config
export function getAdminConfig() {
  return {
    triggerKeyword: ADMIN_TRIGGER_KEYWORD,
    username: ADMIN_USERNAME
  }
}
