import React from "react";
import { Element } from "react-scroll";
import ProfilePic from "../../assets/images/profile-pic.jpg";
import ProfileBg from "../../assets/images/profile-background.png";
import Location from "../../assets/icons/location";
import Figma from "../../assets/icons/figma";
import Twitter from "../../assets/icons/twitter";
import Github from "../../assets/icons/github";
import Green from "../../assets/icons/green";

export default function Hero() {

  return (
    <Element name="hero-section">
      <div
        className={'py-16 px-4 md:px-12 lg:px-20 lg:pb-24 lg:pt-40 lg:flex lg:flex-row-reverse lg:justify-between'}
      >
        <div className="relative flex justify-center h-[300px] lg:w-[400px] lg:h-[360px] mt-10 md:mt-0">
          <img
            src={ProfilePic}
            alt="profile"
            className="absolute z-10 h-[270px] lg:h-[300px] lg:w-[260px]"
          />
          <img
            src={ProfileBg}
            alt="profile-background"
            className="absolute pt-5 lg:h-[320px] lg:w-[280px] lg:pt-0 lg:top-5 lg:right-[-25px] xl:right-[30px]"
          />
        </div>
        <div className="pt-12 lg:w-[768px]">
          <h1
            className={'text-4xl font-semibold'}
          >
            Hi, I’m Negar 👋
          </h1>
          <p
            className={'pt-2 text-base text-gray600'}
          >
            I'm a front-end developer with a focus on creating (and occasionally
            designing) exceptional digital experiences that are fast,
            accessible, visually appealing, and responsive.
          </p>
          <div className="py-12">
            <div className="flex items-center gap-2">
              <Location />
              <p className="text-base text-gray600">Enqelab, Tehran</p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <Green />
              <p className="text-base text-gray600">
                Available for new projects
              </p>
            </div>
          </div>
          <div className="flex">
            <Github />
            <Twitter />
            <Figma />
          </div>
        </div>
      </div>
    </Element>
  );
}
