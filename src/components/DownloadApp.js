import React, { useState } from "react"

export default function DownloadApp() {
  const [showButton, setShowButton] = useState(false)

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault()
    // Stash the event so it can be triggered later.
    window.deferredPrompt = e
    setShowButton(true)
  })

  window.addEventListener("appinstalled", (evt) => {
    setShowButton(false)
  })

  const handleDownloadClick = () => {
    const promptEvent = window.deferredPrompt
    if (!promptEvent) return
    // Show the install prompt.
    promptEvent.prompt()
    // Log the result
    promptEvent.userChoice.then((result) => {
      // Reset the deferred prompt variable, since
      // prompt() can only be called once.
      window.deferredPrompt = null
      // Hide the install button.
      setShowButton(false)
    })
  }

  if (!showButton) return null

  return (
    <div
      className="iconbox text-white bg-primary"
      style={{ position: "fixed", bottom: 0, right: 0, borderRadius: 5 }}
      onClick={handleDownloadClick}
    >
      <i className="fa fa-plus" aria-hidden="true"></i>
    </div>
  )
}
