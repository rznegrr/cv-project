import React from "react";
import Button from "../button";
import ExperienceCard from "../ui/experienceCard";

export default function Experience() {
  return (
    <div className="py-16 bg-gray50">
      <div className="px-4">
        <Button>Experience</Button>
        <p className="pt-4 text-lg text-gray600 text-center">Here is a quick summary of my most recent experiences:</p>
        <ExperienceCard date='Nov 2021 - Present' title='Sr. Frontend Developer'></ExperienceCard>
        <ExperienceCard date='Nov 2021 - Present' title='Sr. Frontend Developer'></ExperienceCard>
        <ExperienceCard date='Nov 2021 - Present' title='Sr. Frontend Developer'></ExperienceCard>
        <ExperienceCard date='Nov 2021 - Present' title='Sr. Frontend Developer'></ExperienceCard>
      </div>
    </div>
  );
}
