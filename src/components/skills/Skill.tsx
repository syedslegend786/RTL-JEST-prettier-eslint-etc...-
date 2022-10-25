import React from "react"
import { ISkillsProp } from "./skills.types"

const Skill: React.FC<ISkillsProp> = ({ skills }) => {
  return (
    <div>
      <ul>
        {skills.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </div>
  )
}

export default Skill
