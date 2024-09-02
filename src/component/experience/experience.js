import React from "react";
import Button from "../ui/button";
import ExperienceCard from "../ui/experienceCard";
import { Element } from "react-scroll";

export default function Experience() {
  // const task1 = ['create and design home and call-us pages','add products daily and change price of them']
  return (
    <Element name='experience-section'>
      <div className="py-16 md:px-12 lg:py-24">
        <div className="px-4 lg:px-20">
          <Button>Experience</Button>
          <p className="pt-4 text-lg text-gray600 text-center pb-6">
            Here is a quick summary of my most recent experiences:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ExperienceCard
              date="January 2024 - Present"
              title="Narcis cosmetics"
              tasks={['Create and design Homepage','Create and design contact us page','Daily addition of products and their price changes']}
            ></ExperienceCard>
            <ExperienceCard
              date="june 2023 - March 2024"
              title="Baskar"
              tasks={['Designing and building the home page with React','Site support']}
            ></ExperienceCard>
          </div>
        </div>
      </div>
    </Element>
  );
}
