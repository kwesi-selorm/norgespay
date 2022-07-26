import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "10%" }}>
      <h1 style={{ fontSize: "40px" }}>
        Sorry, the requested page does not exist :(
      </h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Return to Home
      </button>
    </div>
  );
};

export default NotFound;
