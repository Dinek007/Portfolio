import React from "react"

import { MySkillsComponent } from "./mySkillsComponent"
import { MySkillsContainerProps, ItemsData } from "./types";

const itemsData: ItemsData = {
    title: "@_MY_SKILLS",
    skillNames:
        [
            {
                ico: "H",
                name: "HTML5",
                description: "Markup language"
            },
            {
                ico: "C",
                name: "CSS3",
                description: "Cascading Style Sheets language"
            },
            {
                ico: "G",
                name: "Git",
                description: "System for tracking changes"
            },
            {
                ico: "R",
                name: "RWD",
                description: "Responsive web design"
            },
            {
                ico: "R",
                name: "React",
                description: "JavaScript framework"
            },
            {
                ico: "R",
                name: "React Hooks",
                description: "JavaScript framework"
            },
            {
                ico: "T",
                name: "TypeScript",
                description: "Programming language"
            },
            {
                ico: "R",
                name: "Redux",
                description: "JavaScript library"
            },
            {
                ico: "M",
                name: "Material-UI",
                description: "JavaScript library"
            },
            {
                ico: "T",
                name: "Three.js",
                description: "JavaScript library"
            },
            {
                ico: "R",
                name: "React Native",
                description: "JavaScript framework"
            },
            {
                ico: "R",
                name: "Redux-Saga (basics)",
                description: "JavaScript library"
            },
            {
                ico: "C",
                name: "C and C++ (basics)",
                description: "Programming language"
            },
            {
                ico: "N",
                name: "Node.js + Express.js (basics)",
                description: "JavaScript library"
            },
            {
                ico: "j",
                name: "jQuery",
                description: "JavaScript framework"
            },
            {
                ico: "V",
                name: "Vue.js (started learning)",
                description: "JavaScript framework"
            },
            {
                ico: "L",
                name: "Linux",
                description: "Operating system"
            },
            {
                ico: "E",
                name: "English",
                description: "Intermediate level"
            },
        ]
}

export const MySkillsContainer: React.FC<MySkillsContainerProps> = () => {
    const items = itemsData
    return (
        <MySkillsComponent items={items} />
    )
}