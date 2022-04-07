import React from "react";
import TypeAnimation from "react-type-animation";
import "./profile.css";

function Profile() {
  return (
    <div className="profile__container">
      <div className="profile__parent">
        <div className="profile__details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/bashar-khadra-297553235/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/basharkh9">
                <i className="fa fa-github"></i>
              </a>
            </div>
            <div className="profile__details__name">
              <span className="primary__text">
                {" "}
                Hello, I'm <span className="highlighted__text">Bashar</span>
              </span>
            </div>
            <div className="profile__details__role">
              <span className="primary__text">
                {" "}
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    "Full stack Developer",
                    1000,
                    "React Dev",
                    1000,
                    "Enthusiastic dev",
                    1000,
                    "Modern stack dev",
                    1000,
                  ]}
                  wrapper="h1"
                  repeat={Infinity}
                />
              </span>
              <span className="profile__role__tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </div>
            <div className="profile__options">
              <button className="btn btn--primary">
                {""}
                Hire Me{" "}
              </button>
              <a href="resume.pdf">
                <button className="btn btn--highlighted">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="profile__picture">
        <div className="prfile__picture__background"></div>
      </div>
    </div>
  );
}

export default Profile;
