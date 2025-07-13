"use client";

import React from "react";

interface ProjectAdditionalInfoProps {
  status: string;
  location: string;
  structure: string;
  plotArea: string;
  builtupArea: string;
  type: string;
  vastu: string;
}

interface ProjectInfoProps {
  description: string;
  additionalInfo: ProjectAdditionalInfoProps | null;
  designHighlights: string[] | null | undefined;
  toolsUsed: string[] | null | undefined;
}

const ProjectInfo = ({
  description,
  additionalInfo,
  designHighlights,
  toolsUsed,
}: ProjectInfoProps) => {
  return (
    <div
      className={`${
        designHighlights && designHighlights.length
          ? "bg-black"
          : "bg-black/70 bg-[url(/bg-option-07.png)] bg-blend-overlay bg-cover bg-center bg-no-repeat"
      } text-white z-50 pt-16 w-full px-6`}
    >
      <div className=" w-[90%] mx-auto">
        <div className="">
          <h1 className="text-4xl mb-6 uppercase tracking-wider">About</h1>
          <p className="leading-7 tracking-wider max-w-[95%] text-[18px]">
            {description}
          </p>
        </div>
        {additionalInfo && (
          <div className="">
            <h1 className="text-4xl mt-15 mb-8 uppercase tracking-wider">
              Additional Information
            </h1>
            <div className="text-[18px] leading-10 tracking-wide pb-20">
              <p>Type: {additionalInfo?.type}</p>
              <p>Location: {additionalInfo?.location}</p>
              <p>Plot area: {additionalInfo?.plotArea}</p>
              <p>Builtup area: {additionalInfo?.builtupArea}</p>
              <p>Structure: {additionalInfo?.structure}</p>
              <p>Vastu: {additionalInfo?.vastu}</p>
              <p>Status: {additionalInfo?.status}</p>
            </div>
          </div>
        )}
        {designHighlights && designHighlights.length ? (
          <div className="">
            <h1 className="text-4xl mt-15 mb-8 uppercase tracking-wider">
              Design Higlights
            </h1>
            <ul className="text-[18px] leading-10 tracking-wide pl-5">
              {designHighlights.map((highlight, index) => (
                <li key={index} className="list-disc pl-2">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {toolsUsed && toolsUsed.length ? (
          <div className="">
            <h1 className="text-4xl mt-15 mb-8 uppercase tracking-wider">
              Tools Used
            </h1>
            <ul className="text-[18px] leading-10 tracking-wide pb-20">
              {toolsUsed.map((tool, index) => (
                <li key={index} className="pl-2">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectInfo;
