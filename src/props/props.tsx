
import { Alignment, TechnicalSkills } from "./enums"

export type ButtonProp = {
    title: string,
    isActive: boolean,
    link: string,
    alignment: Alignment,
}

export type LinkProp = {
    title: string,
    position: string,
    isActive: boolean,
    link: string,
}

export type ExperienceProp = {
    company: string,
    positions?: Position[],
    skills: TechnicalSkills[],
}

export class Position {
    title: string
    org: string
    start: Date
    end?: Date

    constructor(title: string, org: string, start: Date, end?: Date) {
        this.title = title
        this.org = org
        this.start = start
        this.end = end
    }
}