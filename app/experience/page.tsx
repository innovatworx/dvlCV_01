"use client";

import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import React from 'react'

// const words= `Work Experience`;

// export function TextGenerateEffectExperience() {
//   return <TextGenerateEffect words={words} />;
// }

const page = () => {
  return (
    <div className='text-white py-40 text-4xl animate-fadeIn'>
      <h1 className="text-6xl mb-4 animate-fadeIn">
        Work Experience</h1>
      <div className="animate-fadeIn">My experience</div>
      <ul>
        <li><span>2018 - 2023</span>IT Support/Systems Administrator at JEFFERSON COUNTY COMMISSION</li>
        <li><span>2015 - 2017</span>Digital Print Operator 2 at RR DONNELLEY</li>
        <li><span>2012 - 2014</span>Preflight Technician/Graphic and Web Design at MSPARK</li>
      </ul>
    </div>
  );
}

export default page