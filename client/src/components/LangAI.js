import React, { useState } from "react";
import Navbar from "../essentials/Navbar";
import Footer from "../essentials/Footer";
import axios from "axios";

export default function LangAI() {
  const [response, setResponse] = useState({});
  const [sentence, setSentence] = useState("");
  const [inputDisplay, setInputDisplay] = useState(false);
  console.log(process.env);
  function fetchData() {
    try {
      const result = axios.post(
        "https://edusphere-python-backend.vercel.app/langai",
        {
          sentence: sentence,
        }
      );
      setResponse(result.data);
      setInputDisplay(true);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && sentence.trim() !== "") {
      handleSubmit(event);
    } else if (event.key === "Control") {
      setInputDisplay(true);
    } else if (sentence.trim() === "") {
      setInputDisplay(false);
    }
  };

  return (
    <>
      <head>
        <title>LangAI</title>
      </head>
      <Navbar />
      <div className="container poppins">
        <header className="mt-2 bg-white shadow-sm p-5 rounded mx-auto w-xl-50 w-sm-100">
          <div>
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
              📕Smart Language Learning System
            </p>
          </div>
          <small className="text-muted">
            Put your English paragraph for getting correct grammar and
            pronunciation. Press Enter to get the result!
          </small>
          <input
            id="sentence-input"
            className="inp rounded"
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder=""
            autoComplete="off"
          />
          <br />
          <br />
          <div className={`answer-box ${inputDisplay ? "d-block" : "d-none"}`}>
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
              Correct Paragraph:
            </p>
            <h6>{response.correct}</h6>
            <br />
            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
              Sentence Structure Analysis:
            </p>
            <h6>{response.structure}</h6>
          </div>
        </header>
        <br />
      </div>
      <Footer />
    </>
  );
}
