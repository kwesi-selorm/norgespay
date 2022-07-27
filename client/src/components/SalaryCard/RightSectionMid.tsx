import { useQuery } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { MdSend } from "react-icons/md";
import { getAllSalaries, updateSalary } from "../../api/salaries";
import { Salary } from "../../types";

interface Props {
  display: string;
  jobTitle: string;
  company: string;
  city: string;
  setDisplay: (display: string) => void;
}

const RightSectionMid = ({ jobTitle, company, city, ...props }: Props) => {
  const { data, isLoading, refetch } = useQuery(["salaries"], getAllSalaries);
  const [userInput, setUserInput] = useState<string>("");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  async function handleUpdate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.setDisplay("none");
    setUserInput("");
    try {
      const salaryToUpdate = data.find(
        (s: Salary) =>
          s.jobTitle === jobTitle && s.company === company && s.city === city
      );
      const id = salaryToUpdate.id;
      const date = new Date().toLocaleString();

      salaryToUpdate.salary.push(Number(userInput)); //Add new salary to salary array
      const updatedSalaryArray = [...salaryToUpdate.salary];
      const updatedSalary = {
        ...salaryToUpdate,
        salary: updatedSalaryArray,
        dateAdded: date,
      };

      await updateSalary(id, updatedSalary);
      refetch();
    } catch (error) {
      window.alert("Salary update failed, please try again later.");
    }
  }

  return (
    <form
      onSubmit={handleUpdate}
      style={{ display: props.display }}
      className="new-salary-form"
    >
      <input
        type="text"
        name="newSalary"
        id="new-salary"
        aria-describedby="update-rule"
        onChange={({ target }: { target: { value: string } }) =>
          setUserInput(target.value)
        }
        value={userInput}
        pattern="[0-9]+"
        placeholder="e.g. 547000"
        title="Update this salary only for the same job title, company, and city. Submit a
        new salary if different"
      />
      <button
        type="submit"
        className="submit-button"
        disabled={userInput === "" && true}
      >
        <MdSend />
      </button>
    </form>
  );
};

export default RightSectionMid;
