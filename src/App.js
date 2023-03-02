import React from "react";
import "./styles/style.scss";
import PersonalDetailsForm from "./components/PersonalDetails"
import ExperienceForm from "./components/Experience";
import EducationForm from "./components/Education";
import Instructions from "./components/Instructions";
import Header from "./components/Header";


function App() {
  return (
  <div>
    <Header />
  <Instructions />
   <PersonalDetailsForm />
   <ExperienceForm />
   <EducationForm />
   </div>
  );

}

export default App;
