import React from "react"

import { MySkillsComponent } from "./mySkillsComponent"
import { MySkillsContainerProps } from "./types";

const skillsLibrary = [
    {
        ico: "R",
        name: "React.js",
        description: "JavaScript library"
    },
    {
        ico: "R",
        name: "React.js",
        description: "JavaScript library"
    },
    {
        ico: "R",
        name: "React.js",
        description: "JavaScript library"
    },
    {
        ico: "R",
        name: "React.js",
        description: "JavaScript library"
    },
    {
        ico: "R",
        name: "React.js",
        description: "JavaScript library"
    },
    {
        ico: "R",
        name: "React.js",
        description: "JavaScript library"
    },
    {
        ico: "R",
        name: "React.js",
        description: "JavaScript library"
    },
    {
        ico: "R",
        name: "React.js",
        description: "JavaScript library"
    },
    {
        ico: "R",
        name: "React.js",
        description: "JavaScript library"
    },
    {
        ico: "R",
        name: "React.js",
        description: "JavaScript library"
    },
    {
        ico: "R",
        name: "React.js",
        description: "JavaScript library"
    },
    {
        ico: "R",
        name: "React.js",
        description: "JavaScript library"
    },

]


export const MySkillsContainer: React.FC<MySkillsContainerProps> = () => {
    return (
        <MySkillsComponent skillsLibrary={skillsLibrary} />
    )
}