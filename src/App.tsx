import "./assets/App.css";
import "./assets/resume.css";
import FormSection from "./components/FormSection";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";
import { ResumeContext } from "./ResumeContext";

import { useState } from "react";

export type PersonalInfo = {
  firstName: string;
};

function App() {
  const [form, setForm] = useState(0);

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: "Johnathan",
  });

  return (
    <ResumeContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
      }}
    >
      <section className="config-section">
        <Sidebar form={form} setForm={setForm} />
        <FormSection form={form} />
      </section>
      <main>
        <Resume />
      </main>
    </ResumeContext.Provider>
  );
}

export default App;
