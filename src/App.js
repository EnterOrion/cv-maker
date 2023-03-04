import React from "react";
import "./styles/style.scss";
import PersonalDetailsForm from "./components/PersonalDetails"
import ExperienceForm from "./components/Experience";
import EducationForm from "./components/Education";
import Instructions from "./components/Instructions";
import Header from "./components/Header";
import Resume from "./components/Resume";
import { PersonalInfoContextProvider } from "./contexts/PersonalInfoContext";
import { ExperienceContextProvider } from "./contexts/ExperienceContext";
import { EducationContextProvider } from "./contexts/EducationContext";

function App() {
  return (
  <div>
    <PersonalInfoContextProvider>
    <ExperienceContextProvider>
    <EducationContextProvider>
    <Header />
    <div className="main-instructions">
  <Instructions />
  </div>
  <div className="main-content">
    <div className="form-section">
   <PersonalDetailsForm />
   <ExperienceForm />
   <EducationForm />
   </div>

   <div className="resume-section">
    <Resume/>
   </div>
  </div>
  </EducationContextProvider>
  </ExperienceContextProvider>
  </PersonalInfoContextProvider>
   </div>
  );

}

export default App;
