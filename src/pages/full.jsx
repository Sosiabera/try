import { useState } from "react";
import LevelCard from "../component/card";
import Arrow from "../component/arrow";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Full() {
  //the database
  let ImgProp = [
    {
      name: "ብሔራዊ",
      img: "/image/final beharaw1.png",
      Level: "ሀ",
      q1complete: 100,
      q2complete: 100,
      q3complete: 100,
      min: 0,
    },
    {
      name: "መርካቶ",
      img: "/image/markato1.png",
      Level: "ለ",
      q1complete: 100,
      q2complete: 100,
      q3complete: 34,
      min: 0,
    },
    {
      name: "ፒያሳ",
      img: "/image/piassa.png",
      Level: "ሐ",
      q1complete: 25,
      q2complete: 56,
      q3complete: 100,
      min: 0,
    },
    {
      name: "4ኪሎ",
      img: "/image/4kilo.png",
      Level: "መ",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 300,
    },
    {
      name: "ብሄራዊ",
      img: "/image/4kilo.png",
      Level: "ረ",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 600,
    },
    {
      name: "ብሄራዊ",
      img: "/image/final beharaw.png",
      Level: "ሰ",
      q1complete: 0,
      q2complete: 0,
      q3complete: 0,
      min: 900,
    },
  ];
  //end level
  const [count, setcount] = useState(3);
  //the arrow
  const [slide, setslide] = useState("");
  //holds the level to be displayed
  let NewArr = [
    {
      id:  "first",
    },
    {
      id:"second",
    },
    {
      id: "third",
    },

  ];
  //index of the above, only till 2
  let index = 0;
  //adds the level to the display array by looping over the database array
  const handl = (start) => {
    for (; start < count; start++) {
      NewArr[index] = ImgProp[start];
      index++;
    }
  };
  handl(count - 3);
  //slide either to the right or left
  if (slide === "+") {
    if (count != ImgProp.length) {
      setcount((prevcount) => prevcount + 3);
      setslide("");
    }
  } else if (slide === "-") {
    if (count > 3) {
      setcount((prevcount) => prevcount - 3);
      setslide("");
    }
  }
  return (
    <>
      <HelmetProvider>
        <div style={{ backgroundcolor: "#5e787d", height: "100dvh" }}>
          <Helmet>
            <style>{"body { background-color: #5e787d; }"}</style>
          </Helmet>
          <Arrow slide={setslide} />
          <LevelCard NewArr={NewArr} />
        </div>
      </HelmetProvider>
    </>
  );
}

export default Full;
