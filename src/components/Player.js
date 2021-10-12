import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = ({ url }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: "0",
        paddingRight: "0",
      }}
    >
      <AudioPlayer autoPlay={false} autoPlayAfterSrcChange={false} src={url} />
    </div>
  );
};

export default Player;
