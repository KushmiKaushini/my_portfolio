import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import * as contentService from '../services/contentService.js'
import { hashText } from '../services/crypto.js'
import { defaultConfig } from '../models/defaultConfig.js'

const ContentContext = createContext(null)

export function ContentProvider({ children }) {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [adminOpen, setAdminOpen] = useState(false)
  const [adminAuthenticated, setAdminAuthenticated] = useState(false)
  const [adminError, setAdminError] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      await contentService.initializeConfig()
      const config = await contentService.loadConfig()
      setContent(config)
      applyTheme(config.theme)
    } catch (error) {
      console.error('Failed to load content:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const applyTheme = (theme) => {
    if (!theme) return
    const root = document.documentElement
    root.style.setProperty('--primary-color', theme.accentColor)
    root.style.setProperty('--accent-color', theme.accentColor)
    root.style.setProperty('--background-color', theme.backgroundColor)
    root.style.setProperty('--surface-color', theme.surfaceColor)
    root.style.setProperty('--heading-font', theme.headingFont)
    root.style.setProperty('--body-font', theme.bodyFont)
  }

  const updateSection = useCallback(async (sectionKey, sectionData) => {
    if (!content) return
    await contentService.updateSection(sectionKey, sectionData)
    setContent(prev => ({ ...prev, [sectionKey]: sectionData }))
    if (sectionKey === 'theme') applyTheme(sectionData)
    return sectionData
  }, [content])

  const exportConfig = useCallback(async () => {
    return await contentService.exportConfig()
  }, [])

  const importConfig = useCallback(async (jsonText) => {
    const config = await contentService.importConfig(jsonText)
    setContent(config)
    applyTheme(config.theme)
    return config
  }, [])

  const resetConfig = useCallback(async () => {
    const config = await contentService.resetConfig()
    setContent(config)
    applyTheme(config.theme)
    return config
  }, [])

  const verifyAdmin = useCallback(async (username, password) => {
    const result = await contentService.verifyAdminLogin(username, password)
    setAdminAuthenticated(result)
    if (!result) {
      setAdminError('Invalid username or password')
    } else {
      setAdminError(null)
      setAdminOpen(false)
    }
    return result
  }, [])

  const openAdmin = useCallback(() => setAdminOpen(true), [])
  const closeAdmin = useCallback(() => setAdminOpen(false), [])

  const value = useMemo(() => ({
    content: content || defaultConfig,
    loading,
    adminOpen,
    adminAuthenticated,
    adminError,
    openAdmin,
    closeAdmin,
    verifyAdmin,
    updateSection,
    exportConfig,
    importConfig,
    resetConfig
  }), [content, loading, adminOpen, adminAuthenticated, adminError, openAdmin, closeAdmin, verifyAdmin, updateSection, exportConfig, importConfig, resetConfig])

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within ContentProvider')
  }
  return context
}
