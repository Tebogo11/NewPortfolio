import Blast from "../components/Blast";
import { TitleH1 } from "../components/HomeElements";
import {
  InfoRow,
  Column1,
  Column2,
  InfoContainer,
} from "../components/InfoSectionElements";
import ContactForm from "../components/Contact/ContactForm";
import FeedBack from "../components/FeedBack";

import { Reviewmsg } from "../components/FeedBack/FeedBackElements";
const Contact = () => {
  return (
    <InfoContainer>
      <InfoRow>
        <Column1>
          <TitleH1>
            <Blast string="Contact Me" color="#51c8cc" />
          </TitleH1>
          <ContactForm />
        </Column1>
        <Column2>
          <TitleH1>
            <Blast string="FeedBack" color="#51c8cc" />
          </TitleH1>
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
