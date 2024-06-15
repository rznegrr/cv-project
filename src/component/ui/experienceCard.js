import React from "react";
import Upwork from "../../assets/icons/upwork";

export default function ExperienceCard({ date, title }) {
  return (
    <div className="bg-default shadow-md rounded-xl mt-6">
      <div className="p-8">
        <div>
          <Upwork />
        </div>
          <p className="py-4 text-base text-gray700">{date}</p>
          <div>
            <p className="pb-4 text-lg text-gray900 font-semibold">{title}</p>
            <ul className="text-gray600 list-disc ml-6">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
              <li>Sed quis justo ac magna.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
      </div>
    </div>
  );
}
