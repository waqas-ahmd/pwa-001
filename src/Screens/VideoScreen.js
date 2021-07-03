import React from "react";
import { useLayoutEffect } from "react";
import backIcon from "../icons/left.svg";

const VideoScreen = ({ navigation }) => {
  window.onhashchange = () => {
    navigation.goBack();
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <div onClick={navigation.goBack} className="icon">
          <img src={backIcon} alt="nav-icon" />
        </div>
      ),
    });
  }, [navigation]);
  return (
    <div className="video screen">
      <iframe
        height="100%"
        width="100%"
        // style={{ height: "100%", width: "100%" }}
        src="https://www.youtube.com/embed/d0kmMHVQryw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoScreen;
