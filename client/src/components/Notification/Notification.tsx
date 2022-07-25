import "./Notification.css";

interface NotificationProps {
  message: string;
  className: string;
}

const Notification = ({ className, message }: NotificationProps) => {
  return <div className={className}>{message}</div>;
};

export default Notification;
