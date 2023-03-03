import React from "react";
import "./styles/style.scss";
import PersonalDetailsForm from "./components/PersonalDetails"
import ExperienceForm from "./components/Experience";
import EducationForm from "./components/Education";
import Instructions from "./components/Instructions";
import Header from "./components/Header";
import Resume from "./components/Resume";

function App() {
  return (
  <div>
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

   </div>
  );

}

export default App;
