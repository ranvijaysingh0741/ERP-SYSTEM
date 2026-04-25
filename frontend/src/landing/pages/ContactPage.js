import React from "react";
import "./ContactPage.css";

const offices = [
  {
    title: "Board Office",
    person: "The Secretary",
    address: [
      "Board of Vocational and Skills Higher Secondary Education",
      "Bhopal, Madhya Pradesh - 462016",
    ],
    contacts: [
      { label: "Admission & Information", value: "+91 9343510828" },
      { label: "Email", value: "contact@bnse.co.in" },
    ],
  },
  {
    title: "Student Support Desk",
    person: "Academic Coordination Team",
    address: [
      "For admissions, results, verification, and academic notices",
      "Available on working days during office hours",
    ],
    contacts: [
      { label: "Verification Support", value: "+91 7387787963" },
      { label: "Email", value: "verification@bnse.co.in" },
    ],
  },
];

const helpTopics = [
  "Admission enquiry",
  "Result assistance",
  "Certificate verification",
  "Academic notice support",
];

const ContactPage = () => {
  return (
    <main className="contact-page">
      <div className="contact-wrap">
        <header className="contact-header">
          <span className="contact-badge">Contact Desk</span>
          <h1>Get In Touch With BVSHSE</h1>
          <p>
            Reach the board office for admissions, student support, document
            verification, academic notices, and general information.
          </p>
        </header>

        <section className="contact-container">
          {offices.map((office) => (
            <article className="contact-card" key={office.title}>
              <div className="contact-card-head">
                <span>{office.title.charAt(0)}</span>
                <div>
                  <h2>{office.title}</h2>
                  <p>{office.person}</p>
                </div>
              </div>

              <div className="contact-address">
                {office.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="contact-blocks">
                {office.contacts.map((item) => (
                  <div className="contact-block" key={item.label}>
                    <h4>{item.label}</h4>
                    <p>{item.value}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="contact-support">
          <div>
            <h2>Office Timing</h2>
            <p>Monday to Friday, 10:00 AM - 05:00 PM</p>
            <span>Saturday and Sunday closed</span>
          </div>

          <div className="contact-topics">
            {helpTopics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
