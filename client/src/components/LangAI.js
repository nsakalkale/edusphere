import React, { useState, useRef } from "react";
import Navbar from "../essentials/Navbar";
import Footer from "../essentials/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";

export default function LangAI() {
  const [response, setResponse] = useState({});
  const [sentence, setSentence] = useState("");
  const [inputDisplay, setInputDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const loadingBar = useRef(null);

  const fetchData = () => {
    loadingBar.current.continuousStart();
    setIsLoading(true);
    axios
      .post(
        process.env.REACT_APP_PYTHON_BACKEND_LLM_URL,
        { sentence: sentence },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        setResponse(response.data);
        setInputDisplay(true);
      })
      .catch((error) => {
        toast.error("API Key Expired!", {
          position: "top-right",
          theme: "dark",
        });
      })
      .finally(() => {
        setIsLoading(false);
        loadingBar.current.complete();
      });
  };

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
      <Helmet>
        <title>LangAI</title>
      </Helmet>
      <LoadingBar color="#00C8B1" height={4} shadow={true} ref={loadingBar} />
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
            disabled={isLoading}
          />
          <br />
          <br />
          <div
            className={`answer-box ${
              inputDisplay && !isLoading ? "d-block" : "d-none"
            }`}
          >
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
      <ToastContainer />
    </>
  );
}
