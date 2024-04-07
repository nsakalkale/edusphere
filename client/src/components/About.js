import React from "react";
import SideNav from "../essentials/SideNav";
import Navbar from "../essentials/Navbar";
import Footer from "../essentials/Footer";
import about_image from "../images/about_image.gif";

export default function About() {
  return (
    <>
      <title>About</title>
      <Navbar />
      <div className="container-fluid poppins">
        <div className="row">
          <div className="col-sm-12">
            <div className="mt-1 big-title p-4">
              <span>About</span>
            </div>

            <div className="container">
              <p className="text-center">
                <b>EduSphere</b> is a revolutionary educational platform that
                empowers children aged 5-12 to learn through interactive
                experiences powered by Virtual Reality (VR), Augmented Reality
                (AR), Artificial Intelligence (AI), and Machine Learning (ML).
                <br />
                <br />
                <b>Imagine:</b> Your child exploring the wonders of the solar
                system in VR, interacting with 3D models of planets, or
                embarking on a virtual journey through ancient civilizations in
                AR.
              </p>
            </div>

            <div className="p-4 rounded shadow-sm bg-white row mt-2">
              <div className="col-sm-6">
                <img src={about_image} className="w-100" />
              </div>
              <div className="col-sm-6 mt-2">
                <p>
                  <b>
                    EduSphere brings abstract concepts to life, sparking
                    curiosity and igniting a passion for learning. Here's how
                    EduSphere empowers your child:
                  </b>
                  <br />
                  <br />
                  <li>
                    <b>24/7 Personalized Learning:</b> EduSphere is your child's
                    always-available AI tutor, ready to answer questions,
                    provide explanations, and offer guidance – anytime,
                    anywhere.
                  </li>
                  <br />
                  <li>
                    <b>Interactive Learning:</b> VR and AR create immersive
                    experiences that make learning engaging and fun. Your child
                    can explore complex topics in a dynamic environment,
                    fostering deeper understanding and retention.
                  </li>
                  <br />
                  <li>
                    <b>Visualized Solutions:</b> Don't just read about it, see
                    it! EduSphere uses AI to generate visual representations of
                    concepts, making them easier to grasp and remember.
                  </li>
                  <br />
                  <li>
                    <b>Personalized Feedback:</b> AI tailors the learning
                    experience to your child's individual needs and learning
                    pace, ensuring they are always challenged and progressing.
                  </li>
                  <br />
                  <b>EduSphere:</b> Where cutting-edge technology meets engaging
                  pedagogy, creating a personalized learning journey for every
                  child. Join us and unlock the power of immersive, AI-powered
                  education!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
