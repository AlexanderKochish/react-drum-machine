const ControlPanel = ({
  power,
  volume,
  getVolume,
  bank,
  switchPower,
  nameClip,
  handleBank,
  trigger,
}) => {
  return (
    <div className="controls-container">
      <div className="power-container">
        <span>Power</span>
        <div className={!power ? "power" : "power active"}>
          <div className="power-select" onClick={switchPower}></div>
        </div>
      </div>
      <div className="volume-panel">
        {trigger ? nameClip : `Volume: ${volume.split(".")[1]}`}
      </div>
      <input
        type="range"
        min="0"
        max="1"
        value={volume}
        onChange={getVolume}
        step="0.01"
        id="rangeVolume"
      />
      <div className="bank-container">
        <span>Bank</span>
        <div className={bank ? "bank active" : "bank"}>
          <div className="bank-select" onClick={handleBank}></div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
