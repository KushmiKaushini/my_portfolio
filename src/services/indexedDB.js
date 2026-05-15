const DB_NAME = 'portfolio-admin-db'
const DB_VERSION = 1
const STORE_NAMES = ['site', 'hero', 'about', 'skills', 'projects', 'education', 'strengths', 'contact', 'footer', 'theme', 'admin']

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = (event) => {
      const db = event.target.result
      STORE_NAMES.forEach(storeName => {
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: 'id' })
        }
      })
    }

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

function transaction(storeName, mode = 'readonly') {
  return openDatabase().then(db => ({
    db,
    tx: db.transaction(storeName, mode),
    store: db.transaction(storeName, mode).objectStore(storeName)
  }))
}

export async function getSection(storeName) {
  const db = await openDatabase()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly')
    const store = tx.objectStore(storeName)
    const request = store.get('default')
    request.onsuccess = () => resolve(request.result ? request.result.value : null)
    request.onerror = () => reject(request.error)
  })
}

export async function setSection(storeName, value) {
  const db = await openDatabase()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)
    const request = store.put({ id: 'default', value })
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export async function deleteSection(storeName) {
  const db = await openDatabase()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)
    const request = store.delete('default')
    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
  })
}

export async function getAllSections() {
  const sectionValues = {}
  await Promise.all(STORE_NAMES.map(async (storeName) => {
    sectionValues[storeName] = await getSection(storeName)
  }))
  return sectionValues
}

export async function clearDatabase() {
  const db = await openDatabase()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAMES, 'readwrite')
    STORE_NAMES.forEach(storeName => tx.objectStore(storeName).clear())
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function getAdminCredentials() {
  return getSection('admin')
}

export async function setAdminCredentials(credentials) {
  return setSection('admin', credentials)
}
