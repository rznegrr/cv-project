import React from "react";
import Button from "../button";
import aboutBg from "../../assets/images/about-background.png";
import aboutPic from "../../assets/images/about-pic.png";

export default function About() {
  return (
    <div className="py-16 bg-gray50 lg:py-24 lg:px-20">
      <Button className={"pb-6 lg:pb-12"}>About me</Button>
      <div className="px-4 lg:flex lg:justify-between">
        <div className="relative flex justify-center h-[380px] lg:h-[520px] lg:w-[440px]">
          <img src={aboutPic} alt="about-me" className="absolute z-10 lg:h-[480px] lg:w-[400px]" />
          <img src={aboutBg} alt="background" className="absolute pt-5 h-[380px] w-[310px] lg:h-[480px] lg:w-[400px] lg:pt-0 lg:top-10 lg:right-14" />
        </div>
        <div className="lg:w-[584px]">
          <h3 className="text-gray900 font-semibold text-2xl pt-12 lg:pt-0">
            Curious about me? Here you have it:
          </h3>
          <p className="text-base text-gray400 pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
            pulvinar sapien et ligula ullamcorper malesuada proin. Mi sit amet
            mauris commodo quis imperdiet massa tincidunt nunc. Interdum posuere
            lorem ipsum dolor sit amet consectetur. Egestas erat imperdiet sed
            euismod nisi. Vel facilisis volutpat est velit egestas. Id diam vel
            quam elementum pulvinar etiam. Elementum eu facilisis sed odio morbi
            quis. Volutpat consequat mauris nunc congue. Leo a diam sollicitudin
            tempor id eu nisl. Morbi tincidunt ornare massa eget egestas purus
            viverra accumsan in. Ornare lectus sit amet est placerat. Elit ut
            aliquam purus sit. Hac habitasse platea dictumst vestibulum.
            Volutpat odio facilisis mauris sit amet massa vitae tortor
            condimentum. Non One last thing, I'm available for freelance work,
            so feel free to reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
}
