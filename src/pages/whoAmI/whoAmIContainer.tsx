import React from "react"

import { WhoAmIComponent } from "./whoAmIComponent"
import { WhoAmIContainerProps } from "./types";

export const WhoAmIContainer: React.FC<WhoAmIContainerProps> = () => {
    return (
        <WhoAmIComponent></WhoAmIComponent>
    )
}