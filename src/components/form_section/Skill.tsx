import UserInput from "../UserInput";

const Skill = () => {
  return (
    <div className="fields-container">
      <h1 className="text-3xl font-semibold border-b-4 border-gray-700 mb-5">
        Skills
      </h1>
      <div className="flex flex-col gap-7">
        <UserInput id="skill" name="skill" label="Skill" />
      </div>
    </div>
  );
};

export default Skill;
