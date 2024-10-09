"use client"
import { BOSTON, LINK_BOSTON, LINK_LINKEDIN, LINK_RESUME, LINK_SF, LINKEDIN, RESUME, SF } from "@/app/constants"
import Button from "./Button"
import { Alignment } from "@/props/enums"


const FOOTER_ITEMS = [
  {
    name: BOSTON,
    link: "",
  },
  {
    name: LINKEDIN,
    link: LINK_LINKEDIN,
  },
  {
    name: SF,
    link: "",
  },
  {
    name: RESUME,
    link: LINK_RESUME,
  },
]

const Footer = () => {
    return (
      <div className="footer flex justify-end">
        <div className="footer-links grid grid-cols-2 gap-y-2 gap-x-40 mb-32 mr-16 justify-end">
          {FOOTER_ITEMS.map((item) => {
            return (
              <Button
                title={item.name}
                link={item.link}
                isActive={false}
                alignment={Alignment.RIGHT}
                key={item.name}
              />
            )
          })}
        </div>
      </div>
    )
}

export default Footer

