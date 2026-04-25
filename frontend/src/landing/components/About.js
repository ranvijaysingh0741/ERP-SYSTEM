import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-left">
          <span className="about-badge">About Our Board</span>

          <h2 className="about-title">
            Board of Vocational and Skills
            <span> Higher Secondary Education</span>
          </h2>

          <div className="about-divider"></div>

          <p className="about-lead">
            Empowering learners through accessible, inclusive, and
            skill-oriented education for a stronger future.
          </p>

          <div className="about-points">
            <div className="about-point">
              <h4>NCERT-Based Curriculum</h4>
              <p>
                Courses follow the CBSE/NCERT pattern in both Hindi and English
                medium.
              </p>
            </div>

            <div className="about-point">
              <h4>Flexible Learning</h4>
              <p>
                Open schooling and ODL model help students continue education
                without daily attendance.
              </p>
            </div>
          </div>

          <button className="contact-btn">Explore More</button>
        </div>

        <div className="about-right">
          <div className="about-card">
            <p>
              Board of Vocational and Skills Higher Secondary Education has been
              established by an Act 1882. It is an autonomous body working for
              the development of education under the guidelines of National
              Education Policy 1986 and Programme of Action 1992, Govt. of
              India.
            </p>

            <p>
              The prime objective of the board is to extend support to students
              from minority communities and weaker sections of society, with
              special emphasis on girls’ education and equal learning
              opportunities for all.
            </p>

            <p>
              The board runs 8th Standard, Secondary and Senior Secondary level
              courses in Hindi and English medium and has adopted the syllabus
              of NCERT, New Delhi for broader academic alignment.
            </p>

            <p>
              It also promotes Open Schooling Education System / ODL and
              provides a platform for job-oriented vocational, professional, and
              technical education without discrimination of any kind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
