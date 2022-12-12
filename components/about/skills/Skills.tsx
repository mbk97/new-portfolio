import React from "react";
import Pills from "../../common/pills/Pills";
import { SubHeader } from "../../common/text/CustomText";
import { skillsData } from "./data";
import { SkillsWrapper } from "./style";

const Skills = () => {
  return (
    <div>
      <SubHeader>My skills</SubHeader>
      <SkillsWrapper>
        {skillsData.map((item) => {
          return <Pills key={item.id} image={item.image} text={item.text} />;
        })}
      </SkillsWrapper>
    </div>
  );
};

export default Skills;
