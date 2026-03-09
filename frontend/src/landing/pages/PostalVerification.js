import React from "react";

const PostalVerification = () => {
  return (
    <div className="verification-page">
      <div className="verification-container">
        <h1>Postal Verification</h1>

        <div className="verification-card">
          <h2>For Postal Verification</h2>

          <p>
            Anyone can apply for verification of original / photocopy of
            documents like detail mark sheet / certificate etc. issued by
            Vidarbha Madhyamik Shiksha Mandal, Nagpur.
          </p>

          <p>
            Students / Companies / Organisations / Agencies / Government
            Departments / Embassies who would like to verify the authenticity of
            academic documents may follow the procedure below:
          </p>

          <ul className="verification-list">
            <li>
              Write an application for verification on simple paper/letterhead
              mentioning Enrollment Number, Roll Number, Certificate Number,
              Class & Session. Attach self-attested photocopies.
            </li>

            <li>
              Send a Demand Draft of Rs. 1000/- (Non-refundable) for each
              document in favour of "Vidarbha Board of Secondary Education"
              payable at Nagpur.
            </li>

            <li>
              Add Rs. 100/- postal charges (India) and Rs. 1000/- for outside
              India.
            </li>

            <li>
              Verification charges for Central/State Government Departments are
              free.
            </li>

            <li>Normal verification period is 30 days.</li>

            <li>
              Mention your postal address and phone number clearly in the
              application.
            </li>

            <li>
              Send completed application through SPEED POST or Registered Post
              only (Courier not accepted).
            </li>
          </ul>

          <div className="address-box">
            <h3>Address Details:</h3>
            <p>
              The Secretary,
              <br />
              Vidarbha Madhyamik Shiksha Mandal,
              <br />
              Ramtek, Nagpur – 441106 (Maharashtra)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostalVerification;
