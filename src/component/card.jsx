import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Slide from "@mui/material/Slide";
import Buna from "./buna";
import { FaLock } from "react-icons/fa";

export default function LevelCard({ NewArr }) {
  //total num of buna
  let totalvalue = 0;
  const refs = useRef();
  const [hovers, sethovers] = useState(false);
  //for alert
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  // to seend to next page
  let navigate = useNavigate();
  //the buna need to open and the name of the level
  let [diff, setdiff] = useState(0);
  let [name, setname] = useState("");
  //send to the next page with the level name if buna is enough if not set alert
  const handleclick = (level, min, name) => {
    if (totalvalue >= min) {
      navigate("level", { state: level });
    } else {
      setdiff(min - totalvalue);
      setname(name);
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 2500);
    }
  };

  clearTimeout(handleclick);
  return (
    <>
      {isAlertVisible && (
        <Alert variant="outlined" severity="info">
          <AlertTitle>ደረጃ ተቆልፏል</AlertTitle>
          ደረጃ <strong>{name}</strong> ለመክፈት {diff} ቡና ያስፈልጋል
        </Alert>
      )}
      <div className="totalbuna">
        <Buna completes={100} 
        /><p>{totalvalue}</p>
      </div>
      <div className="parent">
        <div className="row align-items-start">
          {NewArr.map((arr, index) => (
            <div
              key={index}
              className="col ImgPlace"
              onClick={() => handleclick(arr.name, arr.min, arr.Level)}
            >
              <h1 className="Levelname ">{arr.Level}</h1>
              <div className={totalvalue < arr.min ? "levelsactive" : "levels"}>
                <img
                  className="CardImg  "
                  src={arr.img}
                  alt={arr.name}
                  ref={refs}
                  onMouseEnter={() => {
                    sethovers((prev) => !prev);
                  }}
                  onMouseLeave={() => {
                    sethovers((prev) => !prev);
                  }}
                />
                {totalvalue >= arr.min && (
                  <Slide
                    direction="right"
                    in={hovers}
                    container={refs.current}
                    mountOnEnter
                    unmountOnExit
                  >
                    <p
                      ref={refs}
                      onMouseEnter={() => {
                        sethovers((prev) => !prev);
                      }}
                      onMouseLeave={() => {
                        sethovers((prev) => !prev);
                      }}
                      className="place"
                    >
                      {arr.name}
                    </p>
                  </Slide>
                )}
              </div>
              <div className="coffee">
                <Buna completes={arr.q1complete} />
                <Buna completes={arr.q2complete} />
                <Buna completes={arr.q3complete} />
              </div>
              {totalvalue < arr.min && (
                <div className="lock">
                  <FaLock size={40} color="#9f9b9b" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
