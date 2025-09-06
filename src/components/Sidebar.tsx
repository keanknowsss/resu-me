import {
  faBriefcase,
  faCertificate,
  faGraduationCap,
  faHandFist,
  faHelmetSafety,
  faScrewdriverWrench,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SidebarProps {
  form: number;
  setForm: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar = ({ form, setForm }: SidebarProps) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className={form === 0 ? "active-sidebar" : ""}>
          <button onClick={() => setForm(0)}>
            <FontAwesomeIcon icon={faUser} />
            <p>Personal Information</p>
          </button>
        </li>
        <li className={form === 1 ? "active-sidebar" : ""}>
          <button onClick={() => setForm(1)}>
            <FontAwesomeIcon icon={faBriefcase} />
            <p>Work Experience</p>
          </button>
        </li>
        <li className={form === 2 ? "active-sidebar" : ""}>
          <button onClick={() => setForm(2)}>
            <FontAwesomeIcon icon={faGraduationCap} />
            <p>Educational Background</p>
          </button>
        </li>
        <li className={form === 3 ? "active-sidebar" : ""}>
          <button onClick={() => setForm(3)}>
            <FontAwesomeIcon icon={faHandFist} />
            <p>Strengths</p>
          </button>
        </li>
        <li className={form === 4 ? "active-sidebar" : ""}>
          <button onClick={() => setForm(4)}>
            <FontAwesomeIcon icon={faCertificate} />
            <p>Certifications</p>
          </button>
        </li>
        <li className={form === 5 ? "active-sidebar" : ""}>
          <button onClick={() => setForm(5)}>
            <FontAwesomeIcon icon={faScrewdriverWrench} />
            <p>Skills</p>
          </button>
        </li>
        <li className={form === 6 ? "active-sidebar" : ""}>
          <button onClick={() => setForm(6)}>
            <FontAwesomeIcon icon={faHelmetSafety} />
            <p>Projects</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
