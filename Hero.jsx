import "./Hero.css";

import arrowBtn from "../../assets/arrow_btn.png";

function Hero({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) {
  return (
    <section id="home" className="hero">
      {/* Hero Text */}
      <div className="hero-text">
        <h1>{heroData[heroCount].text1}</h1>
        <h2>{heroData[heroCount].text2}</h2>
      </div>

      {/* Explore Button */}
      <div className="explore-btn">
        <span>Explore the features</span>
        <div className="circle">
          <img src={arrowBtn} alt="arrow" />
        </div>
      </div>

      {/* Dots Navigation */}
      <ul className="hero-dots">
        {heroData.map((_, idx) => (
          <li
            key={idx}
            className={heroCount === idx ? "active" : ""}
            onClick={() => setHeroCount(idx)}
          />
        ))}
      </ul>

      {/* Play / Pause Button (bottom-right corner) */}
      <div className="video-btn" onClick={() => setPlayStatus(!playStatus)}>
        <div className="circle play-circle">
          <div className={playStatus ? "pause-icon" : "play-icon"}></div>
        </div>
        <span>{playStatus ? "Pause the video" : "See the video"}</span>
      </div>
    </section>
  );
}

export default Hero;
