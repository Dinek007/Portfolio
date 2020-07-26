import React from "react"

import { MySkillsComponent } from "./mySkillsComponent"
import { MySkillsContainerProps, ItemsData } from "./types";

const itemsData: ItemsData = {
    title: "@_MY_SKILLS",
    skillNames:
        [
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
}

export const MySkillsContainer: React.FC<MySkillsContainerProps> = () => {
    const items = itemsData
    return (
        <MySkillsComponent items={items} />
    )
}