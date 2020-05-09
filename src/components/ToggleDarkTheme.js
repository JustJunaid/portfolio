import React from "react"

export default function ToggleDarkTheme() {
  return (
    <div
      className="iconbox text-white bg-primary"
      style={{ position: "fixed", bottom: 0, left: 0, borderRadius: 5 }}
    >
      <i className="fa fa-plus" aria-hidden="true"></i>
    </div>
  )
}
