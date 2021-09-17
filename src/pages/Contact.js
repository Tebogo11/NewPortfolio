import Blast from "../components/Blast";
import {
  InfoRow,
  Column1,
  Column2,
  InfoContainer,
} from "../components/InfoSectionElements";
import ContactForm from "../components/Contact/ContactForm";
import FeedBack from "../components/FeedBack";
import { color } from "../constants/Colors";

import { Reviewmsg } from "../components/FeedBack/FeedBackElements";
const Contact = () => {
  return (
    <InfoContainer>
      <InfoRow>
        <Column1>
          <h1 style={{ textAlign: "center" }}>
            <Blast string="Contact Me" color={color.primary} />
          </h1>
          <ContactForm />
        </Column1>
        <Column2>
          <h1 style={{ textAlign: "center" }}>
            <Blast string="FeedBack" color={color.primary} />
          </h1>
          <Reviewmsg>
            Please leave a quick review of what you think of my online portfolio{" "}
          </Reviewmsg>
          <FeedBack />
        </Column2>
      </InfoRow>
    </InfoContainer>
  );
};

export default Contact;
