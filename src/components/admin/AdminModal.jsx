import React, { useState } from 'react'
import '../../styles/admin.css'

function AdminModal({ isOpen, onClose, onAuthenticate, authError }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (event) => {
    event.preventDefault()
    onAuthenticate(username, password)
  }

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </label>
          {authError && <div className="admin-error">{authError}</div>}
          <div className="admin-actions">
            <button type="submit" className="btn primary">Log In</button>
            <button type="button" className="btn secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminModal
