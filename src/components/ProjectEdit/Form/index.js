import React, { useState, useEffect } from "react";
import Blast from "../../Blast";
import { color } from "../../../constants/Colors";
import {
  FormContainer,
  Input,
  Title,
  Container,
  InputContainer,
  TextArea,
  SubTitle,
  Button,
  ButtonContainer,
  AccessContainer,
} from "./FormElements";
import { useDispatch, useSelector } from "react-redux";
import { createProject, updateProject } from "../../../store/action/projectA";
import FileBase from "react-file-base64";

const Form = ({ changeScreen, seletedProjectID }) => {
  const project = useSelector((state) =>
    seletedProjectID
      ? state.projects.find((p) => p._id === seletedProjectID)
      : null
  );
  const [projectData, setProjectData] = useState({
    title: "",
    software: "",
    description: { about: "", why: "", how: "" },
    image: "",
    video: "",
    access: {
      accessOne: { name: "Website", url: "" },
      accessTwo: { name: "GitHub", url: "" },
    },
  });

  const cancel = () => {
    setProjectData({
      title: "",
      software: "",
      description: { about: "", why: "", how: "" },
      image: "",
      video: "",
      access: {
        accessOne: { name: "Website", url: "" },
        accessTwo: { name: "GitHub", url: "" },
      },
    });
    changeScreen("home");
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (project) {
      dispatch(updateProject(seletedProjectID, projectData));
    } else {
      dispatch(createProject(projectData));
    }
    cancel();
  };

  useEffect(() => {
    if (project) {
      setProjectData(project);
    }
  }, [project]);
  return (
    <Container>
      <h1>
        <Blast
          string={project ? "Update Project " : "Add New Project"}
          color={color.primary}
        />
      </h1>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <Title>Title</Title>
          <Input
            name="title"
            placeholder="Name of the project"
            value={projectData.title}
            onChange={(e) =>
              setProjectData({ ...projectData, title: e.target.value })
            }
          />
        </InputContainer>
        <InputContainer>
          <Title>Software</Title>
          <Input
            name="software"
            placeholder="Seprate each software with a comma"
            value={projectData.software}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                software: e.target.value.split(","),
              })
            }
          />
        </InputContainer>
        <InputContainer
          style={{ gridColumn: "span 2", gridColumnStart: 0, gridRowStart: 2 }}
        >
          <Title>Descriptions</Title>
          <SubTitle>About</SubTitle>
          <TextArea
            name="about"
            rows="4"
            cols="50"
            placeholder="What is this project about"
            value={projectData.description.about}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                description: {
                  ...projectData.description,
                  about: e.target.value,
                },
              })
            }
          />
          <SubTitle>Why</SubTitle>
          <TextArea
            name="why"
            rows="4"
            cols="25"
            placeholder="Why did you build this project"
            value={projectData.description?.why}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                description: {
                  ...projectData.description,
                  why: e.target.value,
                },
              })
            }
          />
          <SubTitle>How</SubTitle>
          <TextArea
            name="how"
            rows="4"
            cols="50"
            placeholder="How did you build this project"
            value={projectData.description.how}
            onChange={(e) =>
              setProjectData({
                ...projectData,
                description: {
                  ...projectData.description,
                  how: e.target.value,
                },
              })
            }
          />
        </InputContainer>
        <InputContainer>
          <Title>Image</Title>
          <FileBase
            muiltipe={false}
            type="file"
            onDone={({ base64 }) =>
              setProjectData({ ...projectData, image: base64 })
            }
          />
        </InputContainer>
        <InputContainer>
          <Title>Access</Title>
          <AccessContainer>
            <Input
              name="accessOne"
              placeholder="Name"
              value={projectData.access.accessOne.name}
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  access: {
                    ...projectData.access,
                    accessOne: {
                      ...projectData.access.accessOne,
                      name: e.target.value,
                    },
                  },
                })
              }
            />
            <Input
              name="accessOneUrl"
              placeholder="URL"
              value={projectData.access.accessOne.url}
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  access: {
                    ...projectData.access,
                    accessOne: {
                      ...projectData.access.accessOne,
                      url: e.target.value,
                    },
                  },
                })
              }
            />
          </AccessContainer>
          <AccessContainer>
            <Input
              name="accessTwo"
              placeholder="Name"
              value={projectData.access.accessTwo.name}
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  access: {
                    ...projectData.access,
                    accessTwo: {
                      ...projectData.access.accessTwo,
                      name: e.target.value,
                    },
                  },
                })
              }
            />
            <Input
              name="accessTwoUrl"
              placeholder="URL"
              value={projectData.access.accessTwo.url}
              onChange={(e) =>
                setProjectData({
                  ...projectData,
                  access: {
                    ...projectData.access,
                    accessTwo: {
                      ...projectData.access.accessTwo,
                      url: e.target.value,
                    },
                  },
                })
              }
            />
          </AccessContainer>
        </InputContainer>
        <InputContainer>
          <Title>Video</Title>
          <FileBase
            muiltipe={false}
            type="file"
            onDone={({ base64 }) =>
              setProjectData({ ...projectData, video: base64 })
            }
          />
        </InputContainer>
        <ButtonContainer>
          <Button onClick={cancel} color="red">
            Cancel
          </Button>
          <Button type="submit" color="#51c8cc">
            Submit
          </Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
};

export default Form;
