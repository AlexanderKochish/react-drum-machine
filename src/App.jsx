import { useState } from "react";
import "./App.css";
import { drumsOne, drumsTwo } from "../drums";
import ClipList from "./components/ClipList";
import ControlPanel from "./components/ControlPanel";

function App() {
  let clip = document.querySelectorAll(".clip");
  const [nameClip, setNameClip] = useState("");
  const [volume, setVolume] = useState("0.50");
  const [power, setPower] = useState(false);
  const [bank, setBank] = useState(false);
  const [drums] = useState(drumsOne);
  const [drumsSecond] = useState(drumsTwo);
  const [trigger, setTrigger] = useState(false);

  const volumeClip = () => {
    if (!power) return;
    clip.forEach((item) => {
      item.volume = volume;
    });
  };

  const handleDrumClick = (e) => {
    const item = e.target;
    if (!power) return;
    if (item) {
      item.classList.add("active");
      setTrigger(true);
      volumeClip();
      setNameClip(item.id);
      item.volume = volume;
      item.children[0].play();
      setTimeout(() => e.target.classList.remove("active"), 300);
    }
  };

  const switchPower = () => {
    setPower((prev) => !prev);
  };

  const getVolume = (e) => {
    if (!power) return;
    setTrigger(false);
    setVolume(e.target.value);
  };

  const handleBank = () => {
    setVolume("0.50");
    setBank((prev) => !prev);
  };

  return (
    <div className="inner-container">
      <div className="display-pad-bank">
        <div className="pad-bank">
          {bank ? (
            <ClipList drum={drums} handleDrumClick={handleDrumClick} />
          ) : (
            <ClipList drum={drumsSecond} handleDrumClick={handleDrumClick} />
          )}
        </div>
        <ControlPanel
          power={power}
          volume={volume}
          nameClip={nameClip}
          getVolume={getVolume}
          switchPower={switchPower}
          handleBank={handleBank}
          trigger={trigger}
          bank={bank}
        />
      </div>
    </div>
  );
}

export default App;
