"use client";
import React from "react";
import "./global.scss";
import Box1 from "@/components/Boxes/Box1";
import Box2 from "@/components/Boxes/Box2";
const page = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Box1 />
      </div>
      <div className="box box2">
        <Box2 />
      </div>
      <div className="box box3">box3</div>
      <div className="box box4">box4</div>
      <div className="box box5">box5</div>
      <div className="box box6">box6</div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">box9</div>
    </div>
  );
};

export default page;
