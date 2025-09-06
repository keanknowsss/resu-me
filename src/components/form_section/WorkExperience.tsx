import UserInput from "../UserInput";

const WorkExperience = () => {
  return (
    <div className="fields-container">
      <h1 className="text-3xl font-semibold border-b-4 border-gray-700 mb-5">
        Work Experience
      </h1>
      <div className="flex flex-col gap-7">
        <UserInput id="job-title" name="job_title" label="Job Title" />
        <UserInput id="employer" name="employer" label="Employer" />
        <UserInput id="start-date" name="start_date" label="Start Date" />
        <UserInput id="end-date" name="end_date" label="End Date" />
        <UserInput id="responsibilities" name="responsibilities" label="Responsibilities" />
        <UserInput id="highlights" name="highlights" label="Highlights" />
      </div>
    </div>
  );
};

export default WorkExperience;
