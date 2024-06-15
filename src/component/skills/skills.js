import Button from "../button"
import React from "react";
import Javascript from "../../assets/icons/javascript";
import Git from "../../assets/icons/git";
import Figmaa from "../../assets/icons/figmaa";
import NextJs from "../../assets/icons/nextjs";
import Reactjs from "../../assets/icons/reactJs";
import Sass from "../../assets/icons/sass";
import Tailwind from "../../assets/icons/tailwind";

export default function Skills() {
  return (
    <div className="py-16 px-4 lg:px-20 lg:py-24">
      <Button>Skills</Button>
      <p className="pt-4 pb-6 lg:pb-12 text-lg text-gray600 text-center">The skills, tools and technologies I am really good at:</p>
      <div className="grid grid-cols-3 gap-3 gap-y-4 place-items-center lg:grid-cols-7">
        <Javascript />
        <NextJs />
        <Reactjs />
        <Figmaa />
        <Sass />
        <Tailwind />
        <Git />
      </div>
    </div>
  );
}
