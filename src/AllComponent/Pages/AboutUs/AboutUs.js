import React from 'react';
import img1 from "../../Images/about img/abt1.png";
import img2 from "../../Images/about img/abt2.png";
import img3 from "../../Images/about img/abt3.png";

const AboutUs = () => {
    return (
        <div className="container py-5">
      <h3> <span   style={{
            color: "#007d9e",
          }}>
         OnMedi </span> of the 21st Century</h3>
      <p>
        {" "}
        We deliver the best veterinary experience for pets, pet parents, and vet
        care providers
      </p>

      <div className=" row d-flex align-items-center mb-3">
        <div className="col-md-6">
          <img className="img-fluid p-5" src={img1} alt="about " />
        </div>

        <div
          className="col-md-6"
          style={{
            textAlign: "left",
          }}
        >
          <h4  style={{
            color: "#007d9e",
          }}>We offer urgent care.</h4>

          <p>
            With BetterVet, you can schedule a same-day appointment and video
            call your vet when you need to.
          </p>

          <p>
            We know how hard it can be to concentrate when you are worried about
            your furry family. That’s why we're just one tap away.
          </p>
        </div>

        <div
          className="col-md-6"
          style={{
            textAlign: "left",
          }}
        >
          <h4  style={{
            color: "#007d9e",
          }}>We’re truly mobile.</h4>

          <p>
            Just as you expect your services to come to you, we believe the
            future of vet care is mobile. Not only is this possible with today’s
            technology, it's also better for your pet. Mobile vet care lowers
            your pet’s stress, reduces exposure to infectious diseases, and
            improves accuracy in diagnosis.
          </p>
        </div>

        <div className="col-md-6">
          <img className="img-fluid p-5" src={img2} alt="about " />
        </div>

        {/* History  */}
        <div className="col-md-6">
          <img className="img-fluid p-5" src={img3} alt="about " />
        </div>
        <div
          className="col-md-6"
          style={{
            textAlign: "left",
          }}
        >
          <h4  style={{
            color: "#007d9e",
          }}>We’re truly mobile.</h4>

          <p>
            In 1950, Merle and Jean Marx started Medical Service Company (MSC)
            in a small office in Cleveland, OH as a Pharmacy and Medical
            Equipment Supplier. Since then, we have grown our size, focus and
            impact. We now have hundreds of dedicated team members that care for
            thousands of patients in cities and states across the Midwest and
            Northeast.
          </p>

          <p>
            In our 70+ years of providing home medical equipment and supplies,
            we’ve established ourselves as a company that cares. We have
            survived and thrived by providing the optimal equipment, service and
            care, delivered with compassion and integrity.
          </p>
        </div>
      </div>
    </div>
    );
};

export default AboutUs;