import React from "react";

export default function SkillsIcons({ children, desc }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      {children}
      <p className="text-base pt-2 text-gray600 font-normal">{desc}</p>
    </div>
  );
}
