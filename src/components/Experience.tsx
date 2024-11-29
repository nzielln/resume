
import { TechnicalSkills } from "@/props/enums"
import { ExperienceProp } from "@/props/props"
import { Position } from "@/props/props"

const ExperienceItem = ({company, positions, skills }: ExperienceProp) => {

    const dateAsString = (start: Date, end?: Date) => {
        var startString = `${start.getMonth() + 1}/${start.getFullYear()}`

        if (end != null) {
            var endString = `${end.getMonth() + 1}/${end.getFullYear()}`

            return startString + " - " + endString
        }

        return startString + " - Present"
    }

    const skillsAsString = () => {
        return skills.join("  •  ")
    }
  
    var currentOrg = ""

  const positionHeader = (position: Position) => {
    if (position.org == currentOrg) {
      return null
    } else {
      currentOrg = position.org
      return (
        <h5 className="position-org underline decoration-solid">
          {position.org}
        </h5>
      )
    }
  }

    return (
      <div className="experience-item flex flex-col mb-8">
        <div className="title flex items-center">
          <hr className="title-line mr-2" />
          <h2>{company}</h2>
        </div>
        <div className="bottom-content w-full">
            {
                    positions?.map((position, index) => {
                        return (
                          <div
                            key={index}
                            className="position-date flex w-full justify-between">
                            <div className="flex flex-col w-full">
                              {positionHeader(position)}
                              <div className="flex w-full justify-between">
                                <h5 className="position-title">
                                  {position.title + " "}
                                </h5>
                                <p className="date opacity-75">
                                  {dateAsString(position.start, position.end)}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                    })
            }
          <h5 className="mt-6 opacity-75">{skillsAsString()}</h5>
        </div>
      </div>
    )
}

export default ExperienceItem
