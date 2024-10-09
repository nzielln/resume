"use client"
import {
  linkForMenuItem,
  MenuItem,
  position,
  titleForMenuItem,
} from "@/props/enums"
import { enumKeys } from "@/props/enums"
import Link from "next/link"
import MenuLink from "./MenuLink"
import { usePathname } from "next/navigation"

const Menu = () => {
    const pathName = usePathname()
    
    const menuItems = enumKeys(MenuItem)
    const isActive = (item: string) => {
        if (item == "About") {
            return pathName == "/"
        }
        
        return pathName.replace("/", "") == item.toLowerCase()
    } 

    return (
        <div className="site-menu flex flex-row ml-8 mt-64">
            {menuItems.map((item) => {
                if (MenuItem[ item ] != MenuItem.PROJECTS) {
                    return (
                        <MenuLink
                            key={item}
                            title={titleForMenuItem(MenuItem[ item ])}
                            position={position(MenuItem[ item ])}
                            link={linkForMenuItem(MenuItem[ item ])}
                            isActive={isActive(titleForMenuItem(MenuItem[ item ]))}
                        />
                    )
                }
        })}
        </div>
    )
}

export default Menu
