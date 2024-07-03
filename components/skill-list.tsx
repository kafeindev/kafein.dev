"use client";

import Autoplay from "embla-carousel-autoplay";

import { SKILLS } from "@/lib/constants";
import { Skill } from "@/lib/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const SkillList = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold">
          I love to work with these technologies!
        </h1>
        <hr className="mb-4 mt-1 w-[calc(100%_+2vw)] border-gray-300" />
      </div>
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-3/5 lg:w-full"
      >
        <CarouselContent>
          {SKILLS.map((skill, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/4 lg:h-36 lg:basis-1/6"
            >
              <SkillItem skill={skill} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <div className="pointer-events-none flex h-24 w-24 select-none flex-col items-center justify-center gap-1 rounded-md border border-gray-200 bg-gray-50 lg:h-28 lg:w-28">
      {skill.icon}
      <h1 className="text-sm font-semibold">{skill.name}</h1>
    </div>
  );
};

export default SkillList;
