import React from "react";
import { useLayoutEffect } from "react";
// import { useNavigate } from "react-router-dom";
import backIcon from "../icons/left.svg";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

const GalleryScreen = ({ navigation }) => {
  // const navigate = useNavigate();

  const seeImage = (img) => {
    navigation.navigate("Image", { image: img });
    // navigate("/#image");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <div onClick={navigation.goBack} class="icon">
          <img src={backIcon} alt="nav-icon" />
        </div>
      ),
    });
  }, [navigation]);
  return (
    <div className="screen">
      <div className="galleryGrid">
        {[image2, image3].map((img, i) => (
          <div onClick={() => seeImage(img)} key={i} className="galleryImage">
            <img src={img} alt="pic" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryScreen;
