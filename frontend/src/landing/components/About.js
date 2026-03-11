import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2>ABOUT</h2>
        <h3>BOARD OF VOCATIONAL AND SKILLS HIGHER SECONDARY EDUCATION</h3>

        <p>
          Board of Vocational and Skills Higher Secondary Education has been
          established by anAct 1882. Vidarbha Board of Secondary Education is an
          autonomous body that is established for the development of education
          under the guidelines of National Education Policy 1986 and Programme
          of Action 1992, Govt. of India. The prime objective of the board is to
          extend help and all support to the students of Minority Community and
          weaker sections of the Society with special emphasis on girls’
          education. The mission of the board is not only to educate the
          students of Minority Community but also educate all students of India
          who have not been able to get an education for one or other reasons.
        </p>
        <p>
          Board of Vocational and Skills Higher Secondary Education is running
          8th Standard, Secondary and Senior Secondary level courses in English
          and Hindi medium on the pattern of CBSE/NCERT for students of Minority
          Community with special emphasis on girls education, rural youth,
          working men and women, SC/ST, OBC and other disadvantaged persons who
          could not continue their formal education for some reasons.
        </p>

        <p>
          Our board has adopted the syllabus of NCERT, New Delhi. In
          consideration of this many reputed institutes/Universities/Boards of
          India and aboard has given positive responses by allowing our students
          to take further admission in higher studies of their institutions by
          extending recognition of the courses of Secondary and Senior Secondary
          of Vidarbha Board of Secondary Education.
        </p>

        <a href="/contact">
          <button className="contact-btn">CONTACT US TODAY</button>
        </a>
      </div>

      {/* 👇 ADD WAVE HERE (OUTSIDE CONTAINER, INSIDE SECTION) */}
      <div className="about-wave">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="0.15"
            d="M0,224L80,197C160,171,320,117,480,112C640,107,800,149,960,170C1120,192,1280,192,1360,192L1440,192L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default About;
