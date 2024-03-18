import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            {/* <img src={img/team_logo.png} srcSet="" /> */}
            <img src="https://mrdeepak125.github.io/teamhanumancalisha/img/team_logo.png" alt="Team Logo" />
            <li>
              <h1>
                <a href="#">
                  <span aria-hidden="true" className="fa-solid da-coad" />
                  <span>TEAM HANUMAN CALISHA</span>
                </a>
              </h1>
            </li>
            <li>
              <a href="index.html">HOME</a>
            </li>
            <li>
              <a href="#">GALLARY</a>
            </li>
            <li>
              <a href="Automatic Popup window.html">CONTACT US</a>
            </li>
            <li>
              <a href="about us.html">ABOUT US</a>
            </li>
          </ul>
        </nav>
        <div className="gradient" />
      </div>
    );
  }
}
export default Navbar;
