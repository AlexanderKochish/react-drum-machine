const ClipList = ({ drum, handleDrumClick }) => {
  return (
    <>
      {drum.map(({ id, audioId, src }) => (
        <div key={id} className="drum-pud" onClick={handleDrumClick} id={id}>
          {audioId}
          <audio className="clip" id={audioId} src={src}></audio>
        </div>
      ))}
    </>
  );
};

export default ClipList;
