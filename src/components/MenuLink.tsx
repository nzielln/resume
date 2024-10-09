import { Alignment } from "@/props/enums"
import { LinkProp } from "@/props/props"
import Link from "next/link"

// Define a clickable component on the site
const MenuLink = ({ title, isActive, link, position }: LinkProp) => {
  return (
    <Link
      href={link.length == 0 ? "" : link}
      className={`link-${isActive ? "active" : "normal"} mr-8`}>
      <h4>
        {position}. {title}
      </h4>
    </Link>
  )
}

export default MenuLink
