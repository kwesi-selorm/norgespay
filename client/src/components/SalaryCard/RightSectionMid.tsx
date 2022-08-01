import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { MdSend } from "react-icons/md";
import { useRecoilState } from "recoil";
import { getAllSalaries, updateSalary } from "../../api/salaries";
import { useNotification } from "../../hooks/useNotification";
import { notificationState } from "../../recoil/atoms";
import { Salary } from "../../utils/types";

interface Props {
  display: string;
  jobTitle: string;
  company: string;
  city: string;
  setDisplay: (display: string) => void;
}

const RightSectionMid = ({ jobTitle, company, city, ...props }: Props) => {
  const { data, isLoading } = useQuery(["salaries"], getAllSalaries);
  const [userInput, setUserInput] = useState<string>("");
  const { createSuccess } = useNotification();
  const [, setNotification] = useRecoilState(notificationState);
  const queryClient = useQueryClient();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  async function handleUpdate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.setDisplay("none");
    setUserInput("");
    const salaryToUpdate = data.find(
      (s: Salary) =>
        s.jobTitle === jobTitle && s.company === company && s.city === city
    );
    const id = salaryToUpdate.id;
    const date = new Date().toLocaleString();

    const updatedSalaryArray = salaryToUpdate.salary.concat(Number(userInput)); //Add new salary to salary array
    const updatedSalary = {
      jobTitle,
      company,
      city,
      salary: updatedSalaryArray,
      dateAdded: date,
    };

    try {
      await updateSalary(id, updatedSalary);
      const newNotification = createSuccess("Salary updated successfully");
      setNotification(newNotification);
      queryClient.invalidateQueries(["salaries"]);
    } catch (error) {
      if (error instanceof Error) {
        window.alert(
          `Salary update failed, please try again later: ${error.message}`
        );
      }
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
        pattern="^([0-9]+){5,}$"
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
