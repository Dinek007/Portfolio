import React from "react"

import { MyProjektsComponent } from "./myProjektsComponent"
import { MyProjektsContainerProps } from "./types";


export const MyProjektsContainer: React.FC<MyProjektsContainerProps> = () => {
    return (
        <MyProjektsComponent></MyProjektsComponent>
    )
}