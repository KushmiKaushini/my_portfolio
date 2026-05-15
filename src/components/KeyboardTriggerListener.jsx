import { useEffect, useRef } from 'react'
import { useContent } from '../context/ContentContext.jsx'

function KeyboardTriggerListener() {
  const { openAdmin, content } = useContent()
  const bufferRef = useRef('')

  useEffect(() => {
    const keyword = content.admin?.triggerKeyword || 'sudo'
    const cleansedKeyword = String(keyword).toLowerCase()

    const handleKeyDown = (event) => {
      const target = event.target
      const ignore = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable
      if (ignore) return

      const key = event.key.toLowerCase()
      if (key === 'backspace') {
        bufferRef.current = bufferRef.current.slice(0, -1)
        return
      }
      if (key.length !== 1) return

      bufferRef.current = `${bufferRef.current}${key}`.slice(-cleansedKeyword.length)
      if (bufferRef.current === cleansedKeyword) {
        openAdmin()
        bufferRef.current = ''
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [content.admin, openAdmin])

  return null
}

export default KeyboardTriggerListener
