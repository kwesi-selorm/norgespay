import { MdSend } from "react-icons/md";
import { getAllSalaries, updateSalary } from "../../api/salaries";
import { Salary } from "../../types";

interface Props {
  display: string;
  userInput: number;
  jobTitle: string;
  company: string;
  city: string;
  setUserInput: (userInput: string) => void;
  setDisplay: (display: string) => void;
}

const RightSectionMid = ({
  display,
  userInput,
  jobTitle,
  company,
  city,
  setUserInput,
  setDisplay,
}: Props) => {
  async function handleUpdate(e: any) {
    e.preventDefault();
    setDisplay("none");
    setUserInput("");
    try {
      const newSalary = e.target.newSalary.value,
        salaries = await getAllSalaries(),
        salaryToUpdate = salaries.find(
          (s: Salary) =>
            s.jobTitle === jobTitle && s.company === company && s.city === city
        ),
        id = salaryToUpdate.id;
      await updateSalary(id, newSalary);
      window.location.reload();
    } catch (error) {
      window.alert("Salary update failed, please try again later.");
    }
  }

  return (
    <form
      onSubmit={handleUpdate}
      style={{ display: display }}
      className="new-salary-form"
    >
      <input
        type="text"
        name="newSalary"
        id="new-salary"
        onChange={({ target }: { target: { value: string } }) =>
          setUserInput(target.value)
        }
        value={userInput}
        pattern="[0-9]+"
        title="Input must be a number"
      />
      <button
        type="submit"
        className="submit-button"
        disabled={!userInput && true}
      >
        <MdSend />
      </button>
    </form>
  );
};

export default RightSectionMid;
