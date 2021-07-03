import React from "react";

const Icon = ({ src, label, action }) => {
  return (
    <div onClick={action} className="icon">
      <img src={src} alt="icon" />
      <div className="icon-label">{label}</div>
    </div>
  );
};

export default Icon;
