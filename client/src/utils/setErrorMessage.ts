interface NotificationParams {
  message: string;
  className: string;
}

interface ErrorParams {
  error: { message: string };
  setNotification: ({ message, className }: NotificationParams) => void;
}

export function setErrorMessage({ error, setNotification }: ErrorParams) {
  if (error.message.includes("401")) {
    setNotification({
      message: "Invalid username or password, please try again",
      className: "error",
    });
    setTimeout(() => {
      setNotification({ className: null, message: "" });
    }, 5000);
  }
  if (error.message.includes("404")) {
    setNotification({
      message: "User not found, you will be redirected to the signup page.",
      className: "error",
    });
    setTimeout(() => {
      setNotification({ className: null, message: "" });
      // navigate("/signup");
    }, 5000);
  }
}
