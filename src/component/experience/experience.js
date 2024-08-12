import React from "react";
import Button from "../ui/button";
import ExperienceCard from "../ui/experienceCard";
import { Element } from "react-scroll";

export default function Experience() {
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
              date="Nov 2021 - Present"
              title="Sr. Frontend Developer"
            ></ExperienceCard>
            <ExperienceCard
              date="Nov 2021 - Present"
              title="Sr. Frontend Developer"
            ></ExperienceCard>
            <ExperienceCard
              date="Nov 2021 - Present"
              title="Sr. Frontend Developer"
            ></ExperienceCard>
            <ExperienceCard
              date="Nov 2021 - Present"
              title="Sr. Frontend Developer"
            ></ExperienceCard>
          </div>
        </div>
      </div>
    </Element>
  );
}
