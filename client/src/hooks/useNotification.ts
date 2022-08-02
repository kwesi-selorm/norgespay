import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { displayState } from "../recoil/atoms";

interface Props {
  message: string;
  className: string;
}

export const useNotification = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useRecoilState(displayState);

  ///CREATE SUCCESS FUNCTION///
  const createSuccess = (message: string): Props => {
    setDisplay("block");

    setTimeout(() => {
      setDisplay("none");
      navigate("/all-salaries");
    }, 2000);

    return {
      message,
      className: "success",
    };
  };

  ///CREATE ERROR FUNCTION///
  const createError = (error: any): Props => {
    const statusCode = error.message.slice(32);
    switch (statusCode) {
      //400
      case "400":
        setDisplay("block");
        setTimeout(() => {
          setDisplay("none");
        }, 5000);
        return {
          message: "Bad request, please check your provided inputs",
          className: "error",
        };

      //401
      case "401":
        setDisplay("block");
        setTimeout(() => {
          setDisplay("none");
        }, 5000);
        return {
          message: "Invalid username or password, please try again",
          className: "error",
        };

      //404
      case "404":
        setDisplay("block");
        setTimeout(() => {
          setDisplay("none");
          navigate("/signup");
        }, 5000);
        return {
          message:
            "User not found, you will be redirected to the signup page...",
          className: "error",
        };

      //DEFAULT
      default:
        setDisplay("block");
        setTimeout(() => {
          setDisplay("none");
        }, 5000);
        return {
          message: error.message,
          className: "error",
        };
    }
  };

  return { display, createSuccess, createError };
};
