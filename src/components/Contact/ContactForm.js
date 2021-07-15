import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";

import {
  Input,
  Textarea,
  FormContainer,
  AlertSuccess,
  AlertError,
  ButtonContainer,
  LoadingCircle,
} from "./ContactElements";

import Button from "../Button";
import { CircularProgress } from "@material-ui/core";
init("user_QTAt9cnRG9Mg9kYo4Fm20");

const ContactForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [noError, setNoError] = useState(true);
  const [progress, setprogress] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setprogress(true);
    sendForm("default_service", "portolio", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setname("");
        setemail("");
        setsubject("");
        setmessage("");
        setIsSent(true);
        setprogress(false);
      },
      function (error) {
        console.log("FAILED...", error);
        setNoError(true);
      }
    );
  };

  return (
    <div>
      {isSent ? (
        <AlertSuccess>Your email was successfully,</AlertSuccess>
      ) : noError ? (
        ""
      ) : (
        <AlertError>
          There was an error sending your email please check your details and
          try again
        </AlertError>
      )}

      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        className="form"
      >
        {/* Name  */}
        <FormContainer>
          <Input
            className="Input1"
            type="text"
            name="user_name"
            placeholder="Name"
            maxLength="30"
            aria-invalid={errors.user_name ? "true" : "false"}
            {...register("user_name", { required: true })}
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            oninvalid="this.setCustomValidity('Enter User Name Here')"
            oninput="this.setCustomValidity('')"
          />

          {/* Email  */}

          <Input
            className="Input2"
            type="email"
            name="user_email"
            placeholder="Email"
            maxLength="30"
            aria-invalid={errors.user_email ? "true" : "false"}
            {...register("user_email", { required: true })}
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />

          {/* Subject  */}

          <Input
            className="Input3"
            type="text"
            name="subject"
            placeholder="Subject"
            maxLength="30"
            aria-invalid={errors.subject ? "true" : "false"}
            {...register("subject", { required: true })}
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
            required
          />

          {/* Message  */}

          <Textarea
            name="message"
            placeholder="Message"
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", { required: true })}
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            required
          />
        </FormContainer>
        <br />
        {progress ? (
          <LoadingCircle>
            <CircularProgress color="secondary" />
          </LoadingCircle>
        ) : (
          <ButtonContainer>
            <Button
              variant="contained"
              title="Send"
              type="submit"
              value="Send"
            />
          </ButtonContainer>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
