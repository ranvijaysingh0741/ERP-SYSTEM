import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function Notifications() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    API.get("/student/notifications")
      .then(res => {
        setNotifications(res.data);
      })
      .catch(err => {
        console.log("Notifications API error:", err);
      });

  }, []);

  const markAsRead = (id) => {

    const updated = notifications.map(note =>
      note.id === id ? { ...note, is_read: true } : note
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
                background: note.is_read ? "#f4f6f9" : "#eaf3ff"
              }}
            >

              <div>
                <p style={{ margin: 0 }}>{note.message}</p>
                <small style={{ color: "#777" }}>
                  {note.created_at}
                </small>
              </div>

              {!note.is_read && (
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
    minHeight: "10vh"
  },

  card: {
    background: "#e9eaeb",
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