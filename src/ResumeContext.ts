import { createContext, useContext } from "react";
import type { PersonalInfo } from "@/types";


type ResumeContextType = {
    personalInfo: PersonalInfo,
    setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>
};

export const ResumeContext = createContext<ResumeContextType|undefined>(undefined);

export function useResumeContext() {
    const resume = useContext(ResumeContext);

    if (!resume)
        throw new Error("useResumeContext must be used within ResumeProvider");

    return resume;
}