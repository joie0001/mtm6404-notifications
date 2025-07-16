function NotificationList({ notifications, onClearOne, children }) {
  return (
    <div className="notification-list">
      {notifications.map((note) => (
        <div key={note.id} className="notification">
          <strong>{note.name}</strong>
          <p>{note.message}</p>
          <button onClick={() => onClearOne(note.id)}>Clear</button>
        </div>
      ))}
      {children}
    </div>
  )
}

export default NotificationList 