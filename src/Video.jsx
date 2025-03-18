import "./style/Video.scss";

const Video = function () {
  return (
    <div className="vid-wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        controls
        className="background-video"
        onError={(e) => console.error("Błąd odtwarzania wideo:", e)}
      >
        <source src="/20240101_001533.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
