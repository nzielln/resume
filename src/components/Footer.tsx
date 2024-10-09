"use client"
import { BOSTON, EMAIL, EMAIL_LINK, LINK_BOSTON, LINK_LINKEDIN, LINK_RESUME, LINK_SF, LINKEDIN, RESUME, SF } from "@/app/constants"
import Button from "./Button"
import { Alignment } from "@/props/enums"

const link_items = [
  {
    name: LINKEDIN,
    link: LINK_LINKEDIN,
  },
{
    name: RESUME,
    link: LINK_RESUME,
  },
]

const city_items = [BOSTON, SF]

const Footer = () => {
    const email = () => {
        
    }

    return (
      <div className="footer flex justify-end">
        <div className="footer-links grid grid-cols-2 gap-y-2 gap-x-40 mb-32 mr-16 justify-end">
          <div>
            {city_items.map((item) => {
              return (
                <h4 key={item} className="link-normal mb-2">
                  {item}
                </h4>
              )
            })}
          </div>

          <div>
            {link_items.map((item) => {
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
            <a
              className="link-normal mb-2"
              href="mailto:hello@ellahnzikoba.com">
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    )
}

export default Footer

