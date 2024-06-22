import React from "react";
import Button from "../button";
import ProjectPic from "../../assets/images/projectPic.png";
import Share from "../../assets/icons/share";

export default function WorkSample() {
  return (
    <div className="shadow-md rounded-xl mt-6 lg:mt-12 lg:flex items-center">
      <div className="p-8 lg:p-12 stroke-1 stroke-gray100 bg-gray50 rounded-t-xl">
        <img src={ProjectPic} className="shadow-lg rounded-lg lg:w-[480px] md:m-auto" alt="project-demo"/>
      </div>
      <div className="p-8">
        <p className="text-left font-semibold">Title</p>
        <p className="py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-x-[8px] gap-y-[8px] pb-6">
          <Button>React</Button>
          <Button>Next js</Button>
          <Button>Tailwindcss</Button>
          <Button>Firebase</Button>
          <Button>Git</Button>
          <Button>Figma</Button>
        </div>
      <Share/>
      </div>
    </div>
  );
}
