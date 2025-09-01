import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./assets/App.css";
import "./assets/resume.css";
import Resume from "./components/Resume";
import {
  faBriefcase,
  faCertificate,
  faGraduationCap,
  faHandFist,
  faHelmetSafety,
  faScrewdriverWrench,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <section>
        <div className="sidebar">
          <ul className="sidebar-list">
            <li>
              <button>
                <FontAwesomeIcon icon={faUser} />
                <p>Personal Information</p>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faBriefcase} />
                <p>Work Experience</p>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faGraduationCap} />
                <p>Educational Background</p>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faHandFist} />
                <p>Strengths</p>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faCertificate} />
                <p>Strengths</p>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faScrewdriverWrench} />
                <p>Skills</p>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faHelmetSafety} />
                <p>Projects</p>
              </button>
            </li>
          </ul>
        </div>
        <div className="fields"></div>
      </section>
      <main>
        <Resume />
      </main>
    </>
  );
}

export default App;
