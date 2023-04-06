import React from "react";

const NewItem = ({ title, text, coverImage }) => {
  const image = `http://161.35.29.179:8090/api/v1/public/image/${coverImage}`;
  return (
    <div>
      {title}
      {text}
      <img src={image} alt="" />
    </div>
  );
};

export default NewItem;
