import React from "react";
import "./styles/style.scss";
import PersonalDetailsForm from "./components/PersonalDetails"
import ExperienceForm from "./components/Experience";
import EducationForm from "./components/Education";

function App() {
  return (
  <div>
   <PersonalDetailsForm />
   <ExperienceForm />
   <EducationForm />
   </div>
  );

}

export default App;
