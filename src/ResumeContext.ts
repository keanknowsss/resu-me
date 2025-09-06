import { createContext } from "react";
import type { PersonalInfo } from "./App";


type ResumeContextType = {
    personalInfo: PersonalInfo,
    setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>
};

export const ResumeContext = createContext<ResumeContextType|null>(null);