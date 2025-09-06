import UserInput from "../UserInput";

const Strength = () => {
  return (
    <div className="fields-container">
      <h1 className="text-3xl font-semibold border-b-4 border-gray-700 mb-5">
        Strengths
      </h1>
      <div className="flex flex-col gap-7">
        <UserInput id="strength-1" name="strength_1" label="Strength 1" />
        <UserInput id="strength-2" name="strength_2" label="Strength 2" />
        <UserInput id="strength-3" name="strength_3" label="Strength 3" />
      </div>
    </div>
  );
};

export default Strength;
