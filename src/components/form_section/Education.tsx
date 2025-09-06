import UserInput from "../UserInput";

const Education = () => {
  return (
    <div className="fields-container">
      <h1 className="text-3xl font-semibold border-b-4 border-gray-700 mb-5">
        Educational Background
      </h1>
      <div className="flex flex-col gap-7">
        <UserInput id="program" name="program" label="Degree / Program" />
        <UserInput id="institution" name="institution" label="Institution" />
        <UserInput id="start-date" name="start_date" label="Start Date" />
        <UserInput id="end-date" name="end_date" label="End Date" />
        <UserInput id="highlights" name="highlights" label="Highlights" />
      </div>
    </div>
  )
}

export default Education