import React from "react";
import "./boxes.scss";
import Image from "next/image";
import ME from "../../app/favicon.ico";
import Link from "next/link";
const Box2 = () => {
  return (
    <div>
      <div className="details">
        <div className="logo">
          <Image src={ME} alt="logo" width={50} height={50} />
          <h1>Tota Users</h1>
        </div>
        <h1>11.254</h1>
        <Link href="/">View all</Link>
      </div>
      <div className="charts">
        <div className="chart"></div>
        <div className="text">
          <div className="percentage">45%</div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  );
};

export default Box2;
