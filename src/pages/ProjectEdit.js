import React, { useState } from "react";
import Form from "../components/ProjectEdit/Form/index";
import Admin from "../components/ProjectEdit/admin";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProjects } from "../store/action/projectA";
const ProjectEdit = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [seletedProjectID, setSeletedProjectID] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch, currentScreen]);

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
