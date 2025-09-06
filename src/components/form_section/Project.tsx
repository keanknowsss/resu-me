import UserInput from "../UserInput";

const Project = () => {
  return (
    <div className="fields-container">
      <h1 className="text-3xl font-semibold border-b-4 border-gray-700 mb-5">
        Projects
      </h1>
      <div className="flex flex-col gap-7">
        <UserInput id="title" name="title" label="Title" />
        <UserInput id="duration" name="duration" label="Duration" />
        <UserInput id="role" name="role" label="Role" />
        <UserInput id="description" name="description" label="Description" />
      </div>
    </div>
  );
};

export default Project;
