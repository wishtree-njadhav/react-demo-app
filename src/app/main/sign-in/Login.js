import React from "react";
import "../../shared-components/css/index.css";
import Slider from "../Pages/Slider";
const Login = () => {
  document.title = "Signin | Demo";

  return (
    <div >
      <div className="flex items-center justify-start  pl-[10%] mt-[25px]">
        <header>
          <img src={`/assets/images/wishtreeLogo.png`} className="imgLogo" />
        </header>
      </div>
      <div className="login-section">
        <div className="container">
          <div className="login-wrapper">
            <div className="login-leftblk">
              <div className="login-slide-img">
                <img
                  src={`/assets/images/login.svg`}
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
            <div className="login-rightblk">
              <div class="login-slider">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
