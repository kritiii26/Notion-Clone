import { useState } from 'react'
import './App.css'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <div className={`app ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="sidebar">
        <div className="profile">
          <div className="avatar">A</div>
          Your Workspace
        </div>

        <div className="navlink">
          <span>🏠</span> Home
        </div>
        <div className="navlink">
          <span>🔍</span> Search
        </div>
        <div className="navlink">
          <span>⚙️</span> Settings
        </div>

        <div className="navcat">Recents</div>
        <div className="navlink active">
          <span>👋</span> Getting Started
        </div>
        <div className="navlink">
          <span>📄</span> Email Subject Generator
        </div>
        <div className="navlink">
          <span>🎯</span> Personal Student Producti...
        </div>
        <div className="navlink">
          <span>✅</span> To Do List
        </div>

        <div className="navcat">Private</div>
        <div className="navlink">
          <span>📄</span> Email Subject Generator
        </div>
        <div className="navlink">
          <span>🎯</span> Personal Student Producti...
        </div>
        <div className="navlink">
          <span>👋</span> Getting Started
        </div>
      </div>

      <div className="main">
        <div className="topnav">
          <div className="navleft">
            <span>👋</span>
            <span>Getting Started</span>
          </div>
          <div className="navright">
            <span>Edited Oct 28, 2025</span>
            <span>Share</span>
            <button className="themebtn" onClick={toggleTheme}>
              {isDarkTheme ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>

        <div className="banner">
          <div className="emoji">👋</div>
        </div>

        <div className="page">
          <h1 className="pagetitle">Getting Started</h1>

          <div className="infobox">
            <div className="infoicon">N</div>
            <div className="infotext">
              <strong>Welcome to Notion! Ready to start building?</strong>
              This page is designed to guide you through three short, activity-based lessons that cover the basics. You'll start by exploring your workspace and sidebar, then learn how to use blocks to build your first Notion page, and finally, practice sharing your work with others.
            </div>
          </div>

          <div className="dbhead">
            <span className="dbicon">🍎</span>
            <span>Notion 101</span>
          </div>

          <div className="grid">
            <div className="card">
              <div className="cardimg img-w"></div>
              <div className="cardbody">
                <h3 className="cardtitle">1. Workspace & sidebar</h3>
                <span className="cardbadge">● Not started</span>
              </div>
            </div>

            <div className="card">
              <div className="cardimg img-p"></div>
              <div className="cardbody">
                <h3 className="cardtitle">2. Writing & blocks</h3>
                <span className="cardbadge">● Not started</span>
              </div>
            </div>

            <div className="card">
              <div className="cardimg img-o"></div>
              <div className="cardbody">
                <h3 className="cardtitle">3. Sharing & publishing</h3>
                <span className="cardbadge">● Not started</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
