interface Props {
  jobTitle: string;
  company: string;
  city: string;
}

const LeftSection = ({ jobTitle, company, city }: Props) => {
  return (
    <div className="salary-left-section">
      <h3 className="job-title">{jobTitle}</h3>
      <p className="company">{company}</p>
      <p>
        <i>{city}</i>
      </p>
    </div>
  );
};

export default LeftSection;
