import React from "react";
import Button from "../button";
import aboutBg from "../../assets/images/about-background.png";
import aboutPic from "../../assets/images/about-pic.png";

export default function About() {
  return (
    <div className="py-16 bg-gray50">
      <div className="px-4">
        <Button className={"pb-6"}>About me</Button>
        <div className="relative flex justify-center h-[380px]">
          <img src={aboutPic} alt="about-me" className="absolute z-10" />
          <img src={aboutBg} alt="background" className="absolute pt-5" />
        </div>
        <div>
          <h3 className="text-gray900 font-semibold text-2xl pt-12">
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
