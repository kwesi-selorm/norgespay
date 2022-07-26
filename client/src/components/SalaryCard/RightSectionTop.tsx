import { AiOutlineEdit, AiOutlineCloseSquare } from "react-icons/ai";

interface Props {
  salary: number;
  display: string;
  setDisplay: (display: string) => void;
  setUserInput: (userInput: string) => void;
}

const RightSectionTop = ({
  salary,
  display,
  setDisplay,
  setUserInput,
}: Props) => {
  return (
    <div className="salary-button-div">
      <h4 className="salary">{salary.toLocaleString()} kr</h4>
      <button
        className="edit-close-button"
        onClick={() => {
          display === "none" ? setDisplay("inline-block") : setDisplay("none");
          setUserInput("");
        }}
      >
        {display === "none" ? <AiOutlineEdit /> : <AiOutlineCloseSquare />}
      </button>
    </div>
  );
};

export default RightSectionTop;
