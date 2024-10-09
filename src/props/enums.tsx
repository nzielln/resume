import { LINK_LINKEDIN, LINK_RESUME } from "@/app/constants"

export enum MenuItem {
    ABOUT,
    EXPERIENCE,
    PROJECTS,
}

export enum Link {
    LINKEDIN = "LinkedIn",
    RESUME = "Resume"
}

export enum Locations {
    BOSTON = "Boston",
    SF = "San Francisco"
}

export enum TechnicalSkills {
    IOS_DEVELOPMENT = "iOS Development",
    SWIFT = "Swift",
    SWIFT_UI = "SwiftUI",
    UIKIT = "UIKit",
    OBJC = "Objective-C",
}

export enum Company {
    APPLE = "Apple",
    TOAST = "Toast"
}

export enum Alignment {
    LEFT,
    RIGHT,
    CENTER
}

export const skillsFrom = (company: Company) => {
    switch (company) {
        case Company.APPLE:
            return [
              TechnicalSkills.SWIFT,
              TechnicalSkills.SWIFT_UI,
              TechnicalSkills.IOS_DEVELOPMENT,
              TechnicalSkills.OBJC,
              TechnicalSkills.UIKIT,
            ]
        case Company.TOAST:
            return [
              TechnicalSkills.SWIFT,
              TechnicalSkills.SWIFT_UI,
              TechnicalSkills.IOS_DEVELOPMENT,
              TechnicalSkills.UIKIT,
            ]
    }
}

export const linkFor = (link: Link) => {
    switch (link) {
        case Link.LINKEDIN:
            return LINK_LINKEDIN
        case Link.RESUME:
            return ""
    }
}

export const linkForMenuItem = (menuItem: MenuItem) => {
    switch (menuItem) {
        case MenuItem.ABOUT:
            return `/`
        case MenuItem.EXPERIENCE:
            return `/experience`
        case MenuItem.PROJECTS:
            return `/projects`
    }
}


export const titleForMenuItem = (menuItem: MenuItem) => {
    switch (menuItem) {
        case MenuItem.ABOUT:
            return "About"
        case MenuItem.EXPERIENCE:
            return "Experience"
        case MenuItem.PROJECTS:
            return "Projects"
    }
}

export const position = (menuItem: MenuItem) => {
    switch (menuItem) {
        case MenuItem.ABOUT:
            return "1"
        case MenuItem.EXPERIENCE:
            return "2"
        case MenuItem.PROJECTS:
            return "3"
    }
}



export function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[]
}