import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero_container">
        <div>
          <img src="assets/img/working.png" className="hero_image" />
        </div>

        <div className="hero_list">
          <h1 className="hh">How it works?</h1>
          <div className="list1">
            <img src="assets/img/rectangle35.png" className="limg" />
            <p className="hp">Shop/Visit your favourite website</p>
          </div>
          <div className="list1">
            <img src="assets/img/paymentSuccessful.png" className="limg" />
            <p className="hp">
              Find greattr under pay later and pay with one tap
            </p>
          </div>
          <div className="list1">
            <img src="assets/img/giftBox.png" className="limg" />
            <p className="hp">Repay through our app and get rewards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
