import { Alignment } from "@/props/enums"
import { ButtonProp } from "@/props/props"
import Link from "next/link"

// Define a clickable component on the site
const Button = ({ title, isActive, link, alignment }: ButtonProp) => {
    return (
      <a
        href={link.length == 0 ? "" : link}
        className={`button-${isActive ? "active" : "normal"}`}
        target="_blank"
        rel={"noopener noreferrer"}>
        <h4>{title}</h4>
      </a>
    )
}

export default Button