'use client'
import React from "react";

 

const About = () => {
  // throw new Error("failed to load data")
  return (
    <div>
      <h1 className="text-lg py-2 m-4">About page</h1>
      <button onClick={() => console.log("Clicked")}>Hey There</button>
    </div>
  );
};

export default About;
