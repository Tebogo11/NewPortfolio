import React from "react";
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
const Admin = ({ changeScreen, setSeletedProjectID }) => {
  const projects = useSelector((state) => state.projects);

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
};

export default Admin;
