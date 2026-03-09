import { useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "Your admission has been approved.",
      time: "Today, 10:30 AM",
      read: false
    },
    {
      id: 2,
      text: "New timetable has been uploaded.",
      time: "Yesterday, 4:15 PM",
      read: false
    },
    {
      id: 3,
      text: "Document verification completed successfully.",
      time: "12 Feb, 1:00 PM",
      read: true
    }
  ]);

  const markAsRead = (id) => {
    const updated = notifications.map((note) =>
      note.id === id ? { ...note, read: true } : note
    );
    setNotifications(updated);
  };

  return (
    <div style={styles.container}>
      <h2>Notifications</h2>

      <div style={styles.card}>
        {notifications.length === 0 ? (
          <p>No notifications</p>
        ) : (
          notifications.map((note) => (
            <div
              key={note.id}
              style={{
                ...styles.notification,
                background: note.read ? "#f4f6f9" : "#eaf3ff"
              }}
            >
              <div>
                <p style={{ margin: 0 }}>{note.text}</p>
                <small style={{ color: "#777" }}>{note.time}</small>
              </div>

              {!note.read && (
                <button
                  style={styles.btn}
                  onClick={() => markAsRead(note.id)}
                >
                  Mark as read
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#ffffff",
    minHeight: "100vh"
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  },

  notification: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "10px"
  },

  btn: {
    border: "none",
    background: "#3498db",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: "5px",
    cursor: "pointer"
  }
};
