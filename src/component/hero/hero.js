import React from "react";
import ProfilePic from "../../assets/images/profile-pic.png";
import ProfileBg from "../../assets/images/profile-background.png";
import Location from "../../assets/icons/location";
import Figma from "../../assets/icons/figma";
import Twitter from "../../assets/icons/twitter";
import Github from "../../assets/icons/github";
import Green from "../../assets/icons/green";

export default function Hero() {
  return (
    <div className="py-16 px-4 md:px-12 lg:px-20 lg:py-24 lg:flex lg:flex-row-reverse lg:justify-between">
      <div className="relative flex justify-center h-[300px] lg:w-[400px] lg:h-[360px]">
        <img
          src={ProfilePic}
          alt="profile"
          className="absolute z-10 lg:h-[320px] lg:w-[280px]"
        />
        <img
          src={ProfileBg}
          alt="profile-background"
          className="absolute pt-5 lg:h-[320px] lg:w-[280px] lg:pt-0 lg:top-10 lg:left-[110px]"
        />
      </div>
      <div className="pt-12 lg:w-[768px]">
        <h1 className="text-4xl	font-semibold	">Hi, I’m Negar 👋</h1>
        <p className="pt-2 text-base text-gray600">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="py-12">
          <div className="flex items-center gap-2">
            <Location />
            <p className="text-base text-gray600">Enqelab, Tehran</p>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <Green />
            <p className="text-base text-gray600">Available for new projects</p>
          </div>
        </div>
        <div className="flex">
          <Github />
          <Twitter />
          <Figma />
        </div>
      </div>
    </div>
  );
}
