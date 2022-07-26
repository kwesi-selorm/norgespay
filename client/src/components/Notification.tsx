import "../styles/Notification.css";

interface NotificationProps {
  message: string;
  className: string;
  display: string;
}

const Notification = ({ className, message, display }: NotificationProps) => {
  return (
    <div style={{ display: display }} className={className}>
      {message}
    </div>
  );
};

export default Notification;
