import { useResumeContext } from "@/ResumeContext";
import UserInput from "../UserInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PersonalInformation = () => {
  const { personalInfo, setPersonalInfo } = useResumeContext();
  const [hasLinkedIn, setHasLinkedIn] = useState<boolean>(false);
  const [hasWebsite, setHasWebsite] = useState<boolean>(false);

  function updatePersonalInfo(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setPersonalInfo({ ...personalInfo, [name]: value });
  }

  function toggleLinkedIn(show: boolean) {
    setPersonalInfo({...personalInfo, linkedIn: ""});
    setHasLinkedIn(show);
  }

  function toggleWebsite(show: boolean) {
    setPersonalInfo({...personalInfo, website: ""});
    setHasWebsite(show);
  }

  return (
    <div className="fields-container">
      <h1 className="text-3xl font-semibold border-b-4 border-gray-700 mb-5">
        Personal Information
      </h1>
      <div className="flex flex-col gap-7">
        <UserInput
          id="first-name"
          name="firstName"
          label="First Name"
          value={personalInfo.firstName}
          onChange={updatePersonalInfo}
        />
        <UserInput
          id="middle-name"
          name="middleName"
          label="Middle Name"
          value={personalInfo.middleName}
          onChange={updatePersonalInfo}
        />
        <UserInput
          id="last-name"
          name="lastName"
          label="Last Name"
          value={personalInfo.lastName}
          onChange={updatePersonalInfo}
        />
        <UserInput
          id="job-title"
          name="jobTitle"
          label="Job Title"
          value={personalInfo.jobTitle}
          onChange={updatePersonalInfo}
        />
        <UserInput
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={personalInfo.email}
          onChange={updatePersonalInfo}
        />
        <UserInput
          id="contact-number"
          name="contactNumber"
          label="Contact Number"
          type="tel"
          value={personalInfo.contactNumber}
          onChange={updatePersonalInfo}
        />
        <UserInput
          id="location"
          name="location"
          label="Location"
          value={personalInfo.location}
          onChange={updatePersonalInfo}
        />

        {hasLinkedIn && (
          <UserInput
            id="linkedin"
            name="linkedIn"
            label="LinkedIn"
            value={personalInfo.linkedIn}
            onChange={updatePersonalInfo}
            setShow={toggleLinkedIn}
          />
        )}
        {hasWebsite && (
          <UserInput
            id="website"
            name="website"
            label="Website"
            value={personalInfo.website}
            onChange={updatePersonalInfo}
            setShow={toggleWebsite}
          />
        )}
        <UserInput
          id="summary"
          name="summary"
          label="Summary"
          type="textarea"
          value={personalInfo.summary}
          onChange={updatePersonalInfo}
        />

        {!hasLinkedIn && (
          <div className="pe-5">
            <Button
              className="w-full cursor-pointer"
              onClick={() => setHasLinkedIn(true)}
            >
              Add LinkedIn
            </Button>
          </div>
        )}
        {!hasWebsite && (
          <div className="pe-5">
            <Button
              className="w-full cursor-pointer"
              onClick={() => setHasWebsite(true)}
            >
              Add Website
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInformation;
