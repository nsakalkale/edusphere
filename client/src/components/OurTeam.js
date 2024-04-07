import React, { useEffect } from "react";
import Navbar from "../essentials/Navbar";
import SideNav from "../essentials/SideNav";
import one from "../images/1.png";
import ishan from "../images/ishan.jpg";
import nimish from "../images/nimish.jpg";
import saket from "../images/saket.jpg";
import arya from "../images/arya.jpg";
import Footer from "../essentials/Footer";
import { useLocation } from "react-router-dom";

export default function OurTeam() {
  return (
    <>
      <title>Our team</title>
      <Navbar />
      <div className="container poppins">
        <div className="row">
          <div className="col-sm-12">
            <div className="mt-0 big-title p-4">
              <span>Our Team</span>
            </div>
            <div className="text-center">
              <h4>
                <b>"Brains are bright, spirits are high !!"</b>
              </h4>
            </div>
            <div className="p-4 rounded shadow-sm bg-white mt-2">
              <div className="row">
                <div className="col-sm-3">
                  <div className="card bg-white shadow-sm poppins p-2 my-2">
                    <img src={saket} className="rounded" height={300} />
                    <hr />
                    <div className="card-title text-center fw-bolder ">
                      Saket Dronamraju
                    </div>
                    <div className="text-muted text-center">Team Leader</div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card bg-white shadow-sm p-2 my-2">
                    <img src={arya} className="rounded" height={300} />
                    <hr />
                    <div className="card-title text-center fw-bolder ">
                      Arya Patil
                    </div>
                    <div className="text-muted text-center">AI/ML</div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card bg-white shadow-sm p-2 my-2">
                    <img src={nimish} className="rounded" height={300} />
                    <hr />
                    <div className="card-title text-center fw-bolder ">
                      Nimish Sakalkale
                    </div>
                    <div className="text-muted text-center">
                      DevOps & Web Dev
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card bg-white shadow-sm p-2 my-2">
                    <img src={ishan} className="rounded" height={300} />
                    <hr />
                    <div className="card-title text-center fw-bolder ">
                      Ishan Urgaonkar
                    </div>
                    <div className="text-muted text-center">Unreal Engine</div>
                  </div>
                </div>
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
