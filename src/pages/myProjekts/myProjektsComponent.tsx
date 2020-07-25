import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ProjektElement } from '../../components/projektElement'

import { MyProjektsComponentProps } from "./types";


const useStyles = makeStyles(({ palette }) => createStyles({
    myProjekts: {
        backgroundColor: palette.secondary.dark,
        position: "relative",
        width: "100vw",
        top: "-350px",
        height: "1700px",
    },
    title: {
        position: "relative",
        top: "90px",
        color: palette.primary.light,
        fontFamily: "Candara",
        fontSize: "58px",
    },
    projekts: {
        position: "relative",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "1400px",
        top: "150px",
    }

}));



export const MyProjektsComponent: React.FC<MyProjektsComponentProps> = () => {
    const classes = useStyles();
    return (
        <div className={classes.myProjekts}>
            <p className={classes.title}>@_MY_PROJECTS</p>
            <div className={classes.projekts}>
                <ProjektElement />
                <ProjektElement />
                <ProjektElement />
                <ProjektElement />
            </div>

        </div>
    )
}
