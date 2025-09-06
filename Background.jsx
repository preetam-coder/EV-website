import "./Background.css";

import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const images = [image1, image2, image3];

function Background({ playStatus, heroCount }) {
  return (
    <div className="background">
      {playStatus ? (
        <video className="bg-video" autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>
      ) : (
        <img
          className="bg-image"
          src={images[heroCount % images.length]}
          alt="background"
        />
      )}
      <div className="overlay"></div>
    </div>
  );
}

export default Background;
