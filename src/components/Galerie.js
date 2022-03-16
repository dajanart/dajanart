import img1 from "../galerie/deepWisdom.jpg";
import img2 from "../galerie/exhale.jpg";
import img3 from "../galerie/firstForward.jpg";
import img4 from "../galerie/goingOn.jpg";
import img5 from "../galerie/goldenLady.jpg";
import img6 from "../galerie/Hannah.jpg";
import img7 from "../galerie/Medusa.jpg";
import img8 from "../galerie/motherNature.jpg";
import img9 from "../galerie/Pusteblume.jpg";
import img10 from "../galerie/Sonnenhitze.jpg";
import img11 from "../galerie/Treppe.jpg";
import img12 from "../galerie/Zoe.jpg";
import img13 from "../galerie/Panther.jpg";
import img14 from "../galerie/Berg.jpg";
import img15 from "../galerie/Souls.jpg";
import img16 from "../galerie/Bee.jpg";

import "./Galerie.css";

const Galerie = (props) => {
  const werke = [
    {
      titel: "deep Wisdom",
      src: img1,
      comments: "1.000 €",
    },
    {
      titel: "Exhale",
      src: img2,
      comments: "1.000 €",
    },
    {
      titel: "First Forward",
      src: img3,
      comments: "1.000 €",
    },
    {
      titel: "GoingOn",
      src: img4,
      comments: "weitermachen..",
    },
    {
      titel: "Golden Lady",
      src: img5,
      comments: "1.500 €",
    },
    {
      titel: "Panther",
      src: img13,
      comments: "500 €",
    },
    {
      titel: "Medusa",
      src: img7,
      comments: "verkauft",
    },
    {
      titel: "Mother",
      src: img8,
      comments: "1.000 €",
    },
    {
      titel: "Pusteblume",
      src: img9,
      comments: "300 €",
    },
    {
      titel: "Sonnenhitze",
      src: img10,
      comments: "300 €",
    },
    {
      titel: "Treppe",
      src: img11,
      comments: "500 €",
    },
    {
      titel: "Hannah",
      src: img6,
      comments: "unverkäuflich",
    },
    {
      titel: "Zoe",
      src: img12,
      comments: "unverkäuflich",
    },
    {
      titel: "Berg",
      src: img14,
      comments: "400 €",
    },
    {
      titel: "Souls",
      src: img15,
      comments: "verkauft",
    },
    {
      titel: "Bee",
      src: img16,
      comments: "400 €",
    },
  ];

  return (
    <div className="wrapper">
      <div className="inhalt">
        {werke.map((bilder) => {
          return (
            <div key={bilder.titel}>
              <h3>{bilder.titel}</h3>
              <img src={bilder.src} alt="" />
              <br />
              <h4>{bilder.comments}</h4>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Galerie;
