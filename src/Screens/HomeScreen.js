import React, { useLayoutEffect } from "react";
import Icon from "../Components/Icon";
import appointmentIcon from "../icons/appointment.svg";
import emailIcon from "../icons/email.svg";
import galleryIcon from "../icons/gallery.svg";
import phoneIcon from "../icons/phone.svg";
import playIcon from "../icons/play.svg";
import whatsappIcon from "../icons/whatsapp.svg";
import shareIcon from "../icons/share.svg";
// import { useNavigate } from "react-router-dom";

const HomeScreen = ({ navigation }) => {
  // const navigate = useNavigate();
  const Email = () => {
    window.open("mailto:test@example.com", "_parent");
  };
  const WhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=+39%20351%209557204&text=",
      "_blank"
    );
  };
  const Appoint = () => {
    window.open("https://calendly.com/medicalaestetic", "_blank");
  };
  const Phone = () => {
    window.open("callto:+393519557204", "_parent");
  };
  const Gallery = () => {
    navigation.navigate("Gallery");
    // navigate("/#gallery");
    // window.location.href = "#1";
  };
  const Play = () => {
    navigation.navigate("Video");
    // navigate("/#youtube");
  };

  const Share = () => {
    navigator.share({
      title: "Share Link",
      text: "Hello",
      url: "www.example.com",
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <div onClick={Share} className="icon">
          <img src={shareIcon} alt="nav-icon" />
        </div>
      ),
    });
  }, [navigation]);

  return (
    <div className="home screen">
      <div className="icons-row">
        <div className="icon-group">
          <Icon action={Play} src={playIcon} label="YouTube" />
          <Icon action={Email} src={emailIcon} label="Email" />
        </div>

        <div className="icon-group">
          <Icon action={Appoint} src={appointmentIcon} label="Appointment" />
          <Icon action={WhatsApp} src={whatsappIcon} label="WhatsApp" />
        </div>
        <div className="icon-group">
          <Icon action={Gallery} src={galleryIcon} label="Gallery" />
          <Icon action={Phone} src={phoneIcon} label="Dial" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
