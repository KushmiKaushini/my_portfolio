import React, { useEffect, useMemo, useState } from 'react'
import { useContent } from '../../context/ContentContext.jsx'
import '../../styles/admin.css'

const sectionKeys = ['hero', 'about', 'skills', 'projects', 'education', 'strengths', 'contact', 'footer', 'theme']

function AdminPanel() {
  const { content, updateSection, exportConfig, importConfig, resetConfig } = useContent()
  const [activeSection, setActiveSection] = useState('hero')
  const [editorValue, setEditorValue] = useState('')
  const [message, setMessage] = useState('')
  const [importText, setImportText] = useState('')
  const [exportText, setExportText] = useState('')

  const activeData = useMemo(() => content[activeSection], [content, activeSection])

  useEffect(() => {
    if (activeData) {
      setEditorValue(JSON.stringify(activeData, null, 2))
      setMessage('')
    }
  }, [activeData])

  const handleSave = async () => {
    try {
      const parsed = JSON.parse(editorValue)
      await updateSection(activeSection, parsed)
      setMessage('Saved successfully.')
    } catch (error) {
      setMessage(`Failed to save: ${error.message}`)
    }
  }

  const handleExport = async () => {
    const text = await exportConfig()
    setExportText(text)
    setMessage('Export ready. Copy the JSON to backup.')
  }

  const handleImport = async () => {
    try {
      await importConfig(importText)
      setMessage('Import successful. Refresh the admin panel to see changes.')
    } catch (error) {
      setMessage(`Import failed: ${error.message}`)
    }
  }

  const handleReset = async () => {
    await resetConfig()
    setMessage('Configuration reset to defaults.')
  }

  return (
    <div className="admin-panel-container">
      <h2>Admin Panel</h2>
      <div className="admin-panel-grid">
        <nav className="admin-sidebar">
          <h3>Sections</h3>
          {sectionKeys.map(key => (
            <button
              key={key}
              type="button"
              className={activeSection === key ? 'sidebar-btn active' : 'sidebar-btn'}
              onClick={() => setActiveSection(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </nav>
        <main className="admin-main">
          <div className="admin-section-header">
            <h3>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h3>
            <div>
              <button type="button" className="btn secondary" onClick={handleExport}>Export JSON</button>
              <button type="button" className="btn secondary" onClick={handleReset}>Reset Defaults</button>
            </div>
          </div>

          {activeSection === 'theme' ? (
            <ThemeEditor onSave={handleSave} themeData={activeData} setEditorValue={setEditorValue} editorValue={editorValue} setMessage={setMessage} />
          ) : (
            <div className="admin-editor">
              <textarea
                value={editorValue}
                onChange={(e) => setEditorValue(e.target.value)}
                spellCheck="false"
              />
              <button type="button" className="btn primary" onClick={handleSave}>Save Section</button>
            </div>
          )}

          {message && <div className="admin-message">{message}</div>}

          <div className="admin-import-export">
            <h4>Import JSON</h4>
            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Paste exported JSON here"
              spellCheck="false"
            />
            <button type="button" className="btn primary" onClick={handleImport}>Import Config</button>
          </div>

          {exportText && (
            <div className="admin-export-result">
              <h4>Exported JSON</h4>
              <textarea readOnly value={exportText} spellCheck="false" />
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

function ThemeEditor({ themeData, onSave, setEditorValue, editorValue, setMessage }) {
  const [theme, setTheme] = useState(themeData)

  useEffect(() => {
    setTheme(themeData)
  }, [themeData])

  const handleChange = (field) => (event) => {
    const value = event.target.value
    setTheme(prev => ({ ...prev, [field]: value }))
  }

  useEffect(() => {
    setEditorValue(JSON.stringify(theme, null, 2))
  }, [theme, setEditorValue])

  const handleApply = async () => {
    try {
      await onSave()
      setMessage('Theme saved. Live preview updated.')
    } catch (error) {
      setMessage(`Theme save failed: ${error.message}`)
    }
  }

  return (
    <div className="theme-editor">
      <div className="theme-fields">
        <label>
          Accent Color
          <input type="color" value={theme.accentColor} onChange={handleChange('accentColor')} />
        </label>
        <label>
          Background Color
          <input type="color" value={theme.backgroundColor} onChange={handleChange('backgroundColor')} />
        </label>
        <label>
          Surface Color
          <input type="color" value={theme.surfaceColor} onChange={handleChange('surfaceColor')} />
        </label>
        <label>
          Heading Font
          <input type="text" value={theme.headingFont} onChange={handleChange('headingFont')} placeholder="Poppins, sans-serif" />
        </label>
        <label>
          Body Font
          <input type="text" value={theme.bodyFont} onChange={handleChange('bodyFont')} placeholder="Poppins, sans-serif" />
        </label>
      </div>
      <button type="button" className="btn primary" onClick={handleApply}>Save Theme</button>
    </div>
  )
}

export default AdminPanel
