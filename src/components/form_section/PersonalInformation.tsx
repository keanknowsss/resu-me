import UserInput from "../UserInput";

const PersonalInformation = () => {

  return (
    <div className="fields-container">
      <h1 className="text-3xl font-semibold border-b-4 border-gray-700 mb-5">
        Personal Information
      </h1>
      <div className="flex flex-col gap-7">
        <UserInput id="first-name" name="first_name" label="First Name" />
        <UserInput id="middle-name" name="middle_name" label="Middle Name" />
        <UserInput id="last-name" name="last_name" label="Last Name" />
        <UserInput id="job-title" name="job_title" label="Job Title" />
        <UserInput id="email" name="email" label="Email Address" type="email" />
        <UserInput id="contact-number" name="contact_number" label="Contact Number" type="tel" />
        <UserInput id="location" name="location" label="Location" />
        <UserInput id="linkedin" name="linkedin" label="LinkedIn" />
        <UserInput id="website" name="website" label="Website" />
      </div>
    </div>
  );
};

export default PersonalInformation;
