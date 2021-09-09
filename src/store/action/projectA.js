import * as api from "../../api";
export const FETCH_ALL = "FETCH_ALL";
export const CREATE = "CREATE";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";

export const getProjects = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchProjects();

      const unStringfiedData = data.map((project) => {
        return {
          ...project,
          description: JSON.parse(project.description),
          access: JSON.parse(project.access),
        };
      });
      dispatch({
        type: FETCH_ALL,
        payload: unStringfiedData,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const createProject = (project) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createProject(project);
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updateProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, project);
    const unStringfiedData = {
      ...data,
      description: JSON.parse(data.description),
      access: JSON.parse(data.access),
    };
    dispatch({ type: UPDATE, payload: unStringfiedData });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (id) => {
  return async (dispatch) => {
    try {
      await api.deleteProject(id);
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};
