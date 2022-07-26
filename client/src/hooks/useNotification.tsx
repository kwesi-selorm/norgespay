import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  message: string;
  className: string;
}

export const useNotification = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("");

  const createSuccess = (message: string): Props => {
    setDisplay("block");

    setTimeout(() => {
      setDisplay("none");
      navigate("/all-salaries");
    }, 2000);
    return {
      message: message,
      className: "success",
    };
  };

  const createError = (error: any): Props => {
    if (error.message.includes("401")) {
      setDisplay("block");

      setTimeout(() => {
        setDisplay("none");
      }, 5000);
      return {
        message: "Invalid username or password, please try again",
        className: "error",
      };
    }

    if (error.message.includes("404")) {
      setDisplay("block");
      setTimeout(() => {
        setDisplay("none");
        navigate("/signup");
      }, 5000);
      return {
        message: "User not found, you will be redirected to the signup page...",
        className: "error",
      };
    }
  };

  return { display, createSuccess, createError };
};
