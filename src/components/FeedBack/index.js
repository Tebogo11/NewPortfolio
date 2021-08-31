import React, { useState } from "react";
import ButtonComponent from "../Button";
import { init, send } from "emailjs-com";

import {
  FeedbackCard,
  Textarea,
  FeedbackContainer,
  ButtonContainer,
  Thankyou,
} from "./FeedBackElements";

init("user_QTAt9cnRG9Mg9kYo4Fm20");
const FeedBack = () => {
  const [message, setmessage] = useState("");
  const [review, setreview] = useState("");
  const [sent, setsent] = useState(false);
  const sendReview = () => {
    const subject = "Review: " + review;

    setsent(true);

    send("portfolio_email", "portolio", {
      message: message,
      subject: subject,
    });
  };

  return (
    <FeedbackContainer>
      <div>
        <FeedbackCard
          style={{ marginLeft: review === "Excellent" ? -15 : 0 }}
          onClick={() => setreview("Excellent")}
        >
          <p> &#128526; Excellent</p>
        </FeedbackCard>
        <FeedbackCard
          style={{ marginLeft: review === "Good" ? -15 : 0 }}
          onClick={() => setreview("Good")}
        >
          <p> &#128512; Good</p>
        </FeedbackCard>
        <FeedbackCard
          style={{ marginLeft: review === "Average" ? -15 : 0 }}
          onClick={() => setreview("Average")}
        >
          <p> &#128528; Average</p>
        </FeedbackCard>
        <FeedbackCard
          style={{ marginLeft: review === "Not that Good" ? -15 : 0 }}
          onClick={() => setreview("Not that Good")}
        >
          <p> &#128530; Not that Good</p>
        </FeedbackCard>
        <FeedbackCard
          style={{
            marginLeft: review === "Could use some more work" ? -15 : 0,
          }}
          onClick={() => setreview("Could use some more work")}
        >
          <p> &#128531; Could use some more work</p>
        </FeedbackCard>
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Please write any extra information, that can help me improve this site"
          onChange={(e) => setmessage(e.target.value)}
        />

        {sent ? (
          <Thankyou>Thank you</Thankyou>
        ) : (
          <ButtonContainer>
            <ButtonComponent
              title="Send Review"
              onClickAction={() => sendReview()}
            />
          </ButtonContainer>
        )}
      </div>
    </FeedbackContainer>
  );
};

export default FeedBack;
