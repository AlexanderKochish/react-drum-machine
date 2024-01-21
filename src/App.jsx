import "./App.css";

function App() {
  return (
    <div className="inner-container">
      <div className="display-pad-bank">
        <div className="pad-bank"></div>
        <div className="controls-container">
          <div className="power-container">
            <span>Power</span>
            <div className="power">
              <div className="power-select"></div>
            </div>
          </div>
          <div className="volume-panel">Volume: </div>
          <input type="range" id="rangeVolume" />
          <div className="bank-container">
            <span>Bank</span>
            <div className="bank">
              <div className="bank-select"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
