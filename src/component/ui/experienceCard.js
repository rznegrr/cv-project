import React from "react";
import Upwork from "../../assets/icons/upwork";

export default function ExperienceCard({ date, title }) {
  return (
    <div className="bg-white shadow-md rounded-xl mt-6">
      <div className="p-8">
        <Upwork/>
        <p className="py-4 text-base text-gray700">{date}</p>
        <p className="pb-4 text-lg text-gray900">{title}</p>
        <ul className="text-gray600 list-disc ml-6">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          {/* {children.map((item, index) => (
          <li key={index} className="text-base font-normal text-gray600 pb-1">
            {item}
          </li>
        ))} */}
        </ul>
      </div>
    </div>
  );
}
