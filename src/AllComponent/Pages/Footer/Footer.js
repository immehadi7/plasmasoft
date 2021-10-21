import React from 'react';
import { NavLink } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
    return (
        
            <footer className="footer ">
      <section className="container ">
        <div className="row pt-5">
          <div
            className="col-lg-3 col-md-3 col-12"
            style={{
              textAlign: "left",
            }}
          >
            <h5> About OnMedi</h5>
            <p>
              {" "}
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-3 col-12"
            style={{
              textAlign: "left",
            }}
          >
            <h5> Recent Posts</h5>

            <div>
              <p> We make you smile each time without any pain May 7, 2018 </p>
              <p> Dental Implants are easier now May 7, 2018 </p>
              <p> Image Post Format May 20, 2014 </p>
              <p> Quote Post Format May 18, 2014 </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-12"
            style={{
              textAlign: "left",
            }}
          >
            <h5> Categories</h5>
            <p> Health Basics </p>
            <p> Lifestyle </p>
            <p> Tearms & Condition </p>
            <p> Motivation </p>
          </div>
          <div className="col-lg-3 col-md-3 col-12"
           style={{
            textAlign: "left",
          }}
          >
            <h5> WORK WITH US </h5>
            <p> Our Team </p>
            <p> Instactor </p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="pt-3 pb-0">
            <div className="d-flex justify-content-center">
              <div>
                <span className="d-flex text-dark py-3 ms-auto ">
                  <div className="social-icons-f">
                    <a href="" target="_blank">
                      <span className="icon-users rounded-circle  p-3">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </a>
                  </div>
                  <div className="social-icons-f ms-3 ">
                    <a href="" target="_blank">
                      <span className="icon-users rounded-circle  p-3">
                        <i className="fab fa-twitter"></i>
                      </span>
                    </a>
                  </div>
                  <div className="social-icons-f ms-3 ">
                    <a href="" target="_blank">
                      <span className="icon-users rounded-circle  p-3">
                        <i className="fab fa-linkedin-in"></i>
                      </span>
                    </a>
                  </div>
                  <div className="social-icons-f ms-3 ">
                    <a href="" target="_blank">
                      <span className="icon-users rounded-circle  p-3">
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </div>
                </span>
              </div>
            </div>
            <p className="text-center text-white ">
              Copyright © 2021 All Rights Reserved <NavLink to="https://github.com/immehadi7">Mehedi Hasan</NavLink> .
            </p>
          </div>
        </div>
      </section>

      
    </footer>
        
    );
};

export default Footer;