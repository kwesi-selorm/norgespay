import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  message: string;
  className: string;
}

export const useNotification = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("");

  /**
   * CreateSuccess is a function that takes a string and returns an object with two properties, message
   * and className.
   * @param {string} message - string - The message to display
   * @returns An object with two properties.
   */
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

  /**
   * If the error message includes "401" then set the display to "block" and after 5 seconds set the
   * display to "none". If the error message includes "404" then set the display to "block" and after 5
   * seconds set the display to "none" and navigate to the signup page.
   * @param {any} error - any -&gt; this is the error object that is returned from the API
   * @returns An object with two properties, message and className.
   */
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
