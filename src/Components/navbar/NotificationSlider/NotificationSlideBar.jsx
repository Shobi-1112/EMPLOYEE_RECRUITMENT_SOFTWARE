import React, { useState } from 'react';
import { IoIosNotificationsOutline, IoIosClose } from 'react-icons/io';
import { FaCircleUser } from 'react-icons/fa6';
import './NotificationSlideBar.scss';

const NotificationSlideBar = () => {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [deletedNotificationIndex, setDeletedNotificationIndex] = useState(null);

  const toggleNotification = () => {
    setNotificationOpen(!isNotificationOpen);

    if (!isNotificationOpen) {
      const dummyNotifications = [
        {
          profileIcon: <FaCircleUser />,
          profileName: 'John Doe',
          content: 'This is a dummy notification content.',
          Time: '18 min',
        },
        {
          profileIcon: <FaCircleUser />,
          profileName: 'Manoj',
          content: 'I am a tharkuri.',
          Time: '20 min',
        },
      ];

      setNotifications(dummyNotifications);
    }
  };

  const closeNotificationBox = () => {
    setNotificationOpen(false);
  };

  const closeNotification = (index) => {
    setDeletedNotificationIndex(index);
    setTimeout(() => {
      setDeletedNotificationIndex(null);
      const updatedNotifications = [...notifications];
      updatedNotifications.splice(index, 1);
      setNotifications(updatedNotifications);
    }, 500);
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div>
      <div className="notification-count">
        {notifications.length > 0 ? notifications.length : '0'}
      </div>
      <IoIosNotificationsOutline
        className="notifyicon"
        onClick={toggleNotification}
      >
        <span className="notification-count">
          {notifications.length > 0 ? notifications.length : '0'}
        </span>
      </IoIosNotificationsOutline>
      <div className={`notification-box ${isNotificationOpen ? 'open' : ''}`}>
        NOTIFICATION
        <IoIosClose className="close-icon" onClick={closeNotificationBox} />
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div
              key={index}
              className={`notification-item ${
                index === deletedNotificationIndex ? 'slide-out' : ''
              }`}
            >
              <div className="profile-info">
                <span className="profile-icon">{notification.profileIcon}</span>
              </div>
              <div className="Profilecontent">
                <span className="profile-name">{notification.profileName}</span>
                <div className="notification-content">
                  {notification.content}
                </div>
                <span className="notification-time">{notification.Time}</span>
              </div>
              <IoIosClose
                className="remove-icon"
                onClick={() => closeNotification(index)}
              />
            </div>
          ))
        ) : (
          <div className="no-notifications">No notifications</div>
        )}
        {notifications.length > 0 && (
          <span className="clearall" onClick={clearAllNotifications}>
            CLEAR ALL
          </span>
        )}
      </div>
    </div>
  );
};

export default NotificationSlideBar;
