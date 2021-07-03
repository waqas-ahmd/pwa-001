import React from "react";
import { useLayoutEffect } from "react";
import backIcon from "../icons/left.svg";

const ImageScreen = ({ navigation, route }) => {
  const { image } = route.params;
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
    <div className="screen">
      <img
        style={{ height: "99.9%", width: "100%", objectFit: "contain" }}
        src={image}
        alt="pic"
      />
    </div>
  );
};

export default ImageScreen;
