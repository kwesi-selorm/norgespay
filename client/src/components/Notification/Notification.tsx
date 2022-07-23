import "./Notification.css";

interface NotificationProps {
  message: string;
  className: string;
}

const Notification = (props: NotificationProps) => {
  if (props.message) {
    return <div className={props.className}>{props.message}</div>;
  }
  return null;
};

export default Notification;
