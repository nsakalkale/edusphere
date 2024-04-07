import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../essentials/Navbar";
import Footer from "../essentials/Footer";
import vid1 from "../videos/vid1.mov";
import mentor from "../images/mentor.png";
import langai from "../images/langai.png";
import gif_langai from "../images/langai.gif";

export default function Services() {
  return (
    <>
      <title>Services</title>
      <Navbar />
      <div className="container-fluid poppins">
        <div className="mt-1 big-title p-4">
          <span>Let's Go !!</span>
        </div>
        <div className="row">
          <div className="col-sm-12 bg-white  rounded">
            <div className="p-4">
              <div className="row">
                <div className="col-sm-6">
                  <video
                    className="w-100"
                    controls="true"
                    controlsList="nodownload"
                    id="myVideo"
                  >
                    <source src={vid1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <br />
                  <br />
                </div>

                <div className="col-sm-6">
                  <h2>
                    <img src={mentor} width={50} alt="Mentor" />
                    &nbsp; <b>"Synapse Scholar: Your Virtual Mentor"</b>
                  </h2>
                  <br />
                  <p>
                    "Synapse Scholar: Your Virtual Mentor" revolutionizes
                    learning. This Unreal Engine app seamlessly integrates AI
                    for a personalized learning experience. Your AI mentor
                    adapts to your pace and style, offering real-time
                    explanations and support. Immerse yourself in virtual
                    lectures, simulations, and collaborate with others in
                    virtual classrooms. Synapse Scholar: Your future of
                    learning, powered by AI and Unreal Engine.
                  </p>
                </div>
              </div>
              <p>
                Captivating historian <b>Mr. Steve</b> ignites a passion for the
                past. His tweed jacket and worn satchel hint at a life spent
                unraveling history's mysteries. Enthusiasm gleams in his eyes as
                he welcomes students to a journey through time.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="row">
            <div className="col-sm-6 mt-5">
              <h2>
                <img src={langai} width={50} alt="Mentor" />
                &nbsp; <b>"LangAI: Personal Language Mentor"</b>
              </h2>
              <p>
                Struggling with a new language? LangAI, your AI mentor, empowers
                you to conquer grammar, pronunciation, and fluency. Receive
                personalized feedback and clear explanations to bridge the gap
                between beginner stumbles and confident communication. LangAI
                creates a supportive learning environment. Practice
                conversations, refine pronunciation, and unlock your linguistic
                potential.
              </p>
              <div className="text-center">
                <NavLink to="/langai">
                  <button className="button-in-blue">LangAI</button>
                </NavLink>
              </div>
            </div>

            <div className="col-sm-6">
              <img src={gif_langai} className="w-100" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
