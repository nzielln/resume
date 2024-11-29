import { TechnicalSkills } from "@/props/enums"
import ExperienceItem from "@/components/Experience"
import { Position } from "@/props/props"

const experiences = [
  {
    company: "Apple",
    positions: [
        new Position("Software Engineer", "Home App", new Date("January 2024"))
    ],
    skills: [
        TechnicalSkills.IOS_DEVELOPMENT,
        TechnicalSkills.OBJC,
        TechnicalSkills.SWIFT,
        TechnicalSkills.SWIFT_UI,
        TechnicalSkills.UIKIT,
    ],
  },
  {
    company: "Toast",
      positions: [
        new Position("Software Engineer II", "Toast Takeout", new Date("July 2023"), new Date("January 2024")),
        new Position("Software Engineer Co-op", "Toast Takeout", new Date("January 2023"), new Date("July 2023"))
    ],
    skills: [
        TechnicalSkills.IOS_DEVELOPMENT,
        TechnicalSkills.SWIFT,
        TechnicalSkills.SWIFT_UI,
    ],
  },
  {
    company: "Apple",
    positions: [
        new Position("Software Engineer Intern", "Home App", new Date("July 2022"), new Date("December 2022"))
    ],
    skills: [
        TechnicalSkills.IOS_DEVELOPMENT,
        TechnicalSkills.OBJC,
        TechnicalSkills.SWIFT,
        TechnicalSkills.SWIFT_UI,
        TechnicalSkills.UIKIT,
    ],
  },
]
const Experience = () => {
    return (
      <div className="experience-content mt-32 mr-24">
        {experiences.map((experience, index) => {
          return (
            <ExperienceItem
              key={index}
              company={experience.company}
              positions={experience.positions}
              skills={experience.skills}
            />
          )
        })}
      </div>
    )
}

export default Experience
