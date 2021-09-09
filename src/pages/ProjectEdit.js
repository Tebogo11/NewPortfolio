import React, { useState } from "react";
import Form from "../components/ProjectEdit/Form/index";
import Admin from "../components/ProjectEdit/admin";

const ProjectEdit = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [seletedProjectID, setSeletedProjectID] = useState(0);

  if (currentScreen === "home") {
    return (
      <Admin
        changeScreen={setCurrentScreen}
        setSeletedProjectID={setSeletedProjectID}
      />
    );
  } else {
    return (
      <Form
        changeScreen={setCurrentScreen}
        seletedProjectID={seletedProjectID}
      />
    );
  }
};

export default ProjectEdit;
