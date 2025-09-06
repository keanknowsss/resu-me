import UserInput from "../UserInput";

const Certification = () => {
  return (
    <div className="fields-container">
      <h1 className="text-3xl font-semibold border-b-4 border-gray-700 mb-5">
        Certification
      </h1>
      <div className="flex flex-col gap-7">
        <UserInput id="program" name="program" label="Seminar / Program" />
        <UserInput id="issued-by" name="issued_by" label="Issued By" />
        <UserInput id="start-date" name="start_date" label="Start Date" />
        <UserInput id="end-date" name="end_date" label="End Date" />
      </div>
    </div>
  );
};

export default Certification;
