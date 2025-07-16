import { useState } from 'react'
import NotificationList from './notificationlist.jsx'
import notificationsData from './notifications'
import './App.css'

function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  const handleClearAll = () => {
    setNotifications([])
  }

  const handleClearOne = (id) => {
    setNotifications((prev) => prev.filter((note) => note.id !== id))
  }

  return (
    <div className="App">
      <h1>Notifications</h1>
      <p>You have {notifications.length} notification{notifications.length !== 1 ? 's' : ''}</p>
      <button onClick={handleClearAll}>Clear All</button>
      <NotificationList notifications={notifications} onClearOne={handleClearOne}>
        <p style={{ marginTop: '1rem' }}>Click "Clear" to remove individual notifications.</p>
      </NotificationList>
    </div>
  )
}

export default App


