import img1 from "../gallerie/deepWisdom.jpg";
import img2 from "../gallerie/exhale.jpg";
import img3 from "../gallerie/firstForward.jpg";
import img4 from "../gallerie/goingOn.jpg";
import img5 from "../gallerie/goldenLady.jpg";
import img6 from "../gallerie/Hannah.jpg";
import img7 from "../gallerie/Medusa.jpg";
import img8 from "../gallerie/motherNature.jpg";
import img9 from "../gallerie/Pusteblume.jpg";
import img10 from "../gallerie/Sonnenhitze.jpg";
import img11 from "../gallerie/Treppe.jpg";
import img12 from "../gallerie/Zoe.jpg";
import img13 from "../gallerie/Panther.jpg";

import "./Gallerie.css";

const Gallerie = (props) => {
  const werke = [
    {
      titel: "deep Wisdom",
      src: img1,
      comments: "2.000 €",
    },
    {
      titel: "Exhale",
      src: img2,
      comments: "das allerschönste",
    },
    {
      titel: "First Forward",
      src: img3,
      comments: "erst",
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
      comments: "5.000 €",
    },
    {
      titel: "Medusa",
      src: img7,
      comments: "unverkäuflich",
    },
    {
      titel: "Mother",
      src: img8,
      comments: "1.000 €",
    },
    {
      titel: "Pusteblume",
      src: img9,
      comments: "800 €",
    },
    {
      titel: "Sonnenhitze",
      src: img10,
      comments: "990 €",
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

export default Gallerie;
