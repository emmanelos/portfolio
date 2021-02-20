import React, { useEffect, useState } from 'react'

const IfOffline = ({ children }) => {

  const [onLine, setOnLine] = useState(true)

  useEffect(() => {

    const goOnline = () => setOnLine(true)

    const goOffline = () => setOnLine(false)

    if (!window) {
      window.addEventListener('online', goOnline)
      window.addEventListener('offline', goOffline)
    }
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  return (
    <>
      {
        onLine
          ? null
          : <span>{children}</span>
      }
    </>
  )
}

export default IfOffline