import React from "react";
import { topDealUsers } from "@/helpers/Data";
import Image from "next/image";
import "./boxes.scss";
const Box1 = () => {
  return (
    <div>
      <h1 className=" text-3xl font-bold">Top Deals</h1>
      <div className="list">
        {topDealUsers.map((data) => (
          <div
            className="listItem flex  justify-between  items-center my-2"
            key={data.id}
          >
            <Image
              className=" rounded-full object-cover "
              src={data.img}
              alt="userPhoto"
              width={40}
              height={40}
            />
            <div className="details items-start ps-2 me-5">
              <h1>{data.username}</h1>
              <p>{data.email}</p>
            </div>
            <div className=" flex justify-center  items-end">
              <h1>{data.amount}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box1;
