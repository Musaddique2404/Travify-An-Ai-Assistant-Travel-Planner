/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { LogInContext } from "@/Context/LogInContext/Login";

function Hero() {
  const { isAuthenticated } = useContext(LogInContext);
  return (
    <div className="flex items-center flex-col text-center justify-center h-auto">
      <div className="text px-10 md:px-40 flex flex-col items-center justify-center gap-4">
        <div className="heading">
          <h1 className="font-extrabold text-3xl md:text-[50px] leading-tight text-orange-500">
            Set Out on Exhilarating Journeys with Travify
          </h1>
          <h3 className="font-extrabold opacity-70 text-xl md:text-[40px] leading-tight">
            Personalized Itineraries for Every Explorer
          </h3>
        </div>
        <div className="desc mt-5">
          <h5 className="text-[15px] md:text-2xl font-semibold opacity-40">
            Your reliable travel planner and adventure companion, igniting exciting journeys with tailored travel plans crafted to fit your passions and preferences.
          </h5>
        </div>
        <div className="button">
          <Link to="/plan-a-trip">
            <Button className="">
              {isAuthenticated
                ? "Let's Make Another Trip"
                : "Plan a Trip, It's Free"}
            </Button>
          </Link>
        </div>
      </div>
      <div className="img">
        <img src="/travel.png" className="" alt="" />
      </div>
    </div>
  );
}

export default Hero;
