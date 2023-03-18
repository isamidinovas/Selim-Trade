import React from "react";
// import { Admin, ListGuesser, Resource, useAuthProvider } from "react-admin";

const Authentication = () => {
  return (
    <>
      <div className="container">
        <div className="inner_wrapper">
          <label htmlFor="name">name</label>
          <input type="text" />
          <label htmlFor="password">pass</label>
          <input type="text" />
          <button>submit</button>
        </div>
      </div>
    </>
  );
};

export default Authentication;
