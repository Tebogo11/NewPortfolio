import React, { useState } from "react";
import { Button } from "./Form/FormElements";
import Blast from "..//Blast";
import { color } from "../../constants/Colors";
import {
  ProjectCard,
  ProjectContainer,
  CardContent,
  IconContainer,
} from "./adminElements";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject } from "../../store/action/projectA";
//icons
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

import { Input } from "./Form/FormElements";
const Admin = ({ changeScreen, setSeletedProjectID }) => {
  const projects = useSelector((state) => state.projects);
  const [passCode, setPassCode] = useState("");
  const dispatch = useDispatch();

  const handleUpdate = (id) => {
    setSeletedProjectID(id);
    changeScreen("editPage");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProject(id));
      alert("Your project has being deleted");
    }
  };

  if (passCode === process.env.REACT_APP_EDIT_PASSCODE) {
    return (
      <div>
        <h1>
          <Blast string="Project Edit Page" color={color.primary} />
        </h1>
        <div style={{ textAlign: "center" }}>
          <Button color="#51c8cc" onClick={() => changeScreen("editPage")}>
            Create Project
          </Button>
        </div>
        <ProjectContainer>
          {projects?.map((project) => {
            return (
              <ProjectCard key={project._id}>
                <CardContent>{project.title}</CardContent>
                <IconContainer>
                  <BiEditAlt
                    onClick={() => handleUpdate(project._id)}
                    color="white"
                    size={25}
                  />
                  <RiDeleteBin5Line
                    color="white"
                    size={25}
                    onClick={() => handleDelete(project._id)}
                  />
                </IconContainer>
              </ProjectCard>
            );
          })}
        </ProjectContainer>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>
          <Blast string="Whats the password?" color={color.primary} />
        </h1>
        <Input
          type="password"
          onChange={(e) => setPassCode(e.target.value)}
          style={{ width: "60%", fontSize: 20, textAlign: "center" }}
        />
      </div>
    );
  }
};

export default Admin;
