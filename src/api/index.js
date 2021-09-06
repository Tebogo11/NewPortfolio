import axios from "axios";

const API = axios.create({
  baseURL: "https://tdportfoliobackend.herokuapp.com/",
});

export const fetchProjects = () => {
  return API.get("/projects");
};
export const createProject = (newProjects) =>
  API.post("/projects", newProjects);

export const updateProject = (id, updatedProject) =>
  API.patch(`/projects/${id}`, updatedProject);

export const deleteProject = (id) => API.delete(`/projects/${id}`);
