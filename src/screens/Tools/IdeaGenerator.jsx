import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SessionsContext } from "../../SessionsContext";
import { checkSessionAndNavigate } from "../../util/SessionUtil";
import TextProcessor from "../../components/TextProcessor";

export default function GrammarFix() {
  const navigate = useNavigate();
  const SessionCheck = useContext(SessionsContext);
  checkSessionAndNavigate(SessionCheck, navigate);

  return (
    <>
      <div>This is the main page anyone can see</div>
    </>
  );
}
