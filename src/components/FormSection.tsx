import Certification from "./form_section/Certification";
import Education from "./form_section/Education";
import PersonalInformation from "./form_section/PersonalInformation";
import Project from "./form_section/Project";
import Skill from "./form_section/Skill";
import Strength from "./form_section/Strength";
import WorkExperience from "./form_section/WorkExperience";

interface FormSectionProps {
  form: number;
}

const FormSection = ({ form }: FormSectionProps) => {
  switch (form) {
    case 0:
      return <PersonalInformation />;
    case 1:
      return <WorkExperience />;
    case 2:
      return <Education />;
    case 3:
      return <Strength />;
    case 4:
      return <Certification />;
    case 5:
      return <Skill />;
    case 6:
      return <Project />;
    default:
      return <></>;
  }
};

export default FormSection;
