import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { WhoAmIComponentProps } from "./types";

const useStyles = makeStyles(({ palette }) => createStyles({
    whoAmI: {
        backgroundColor: "#aaaaaa",
        position: "relative",
        width: "100vw",
        top: "-350px",
        height: "1200px",
        zIndex: -3
    },
    title: {
        position: "relative",
        top: "450px",
        color: palette.primary.dark,
        fontFamily: "Candara",
        fontSize: "58px"
    },
    face: {
        position: "absolute",
        width: "250px",
        height: "300px",
        top: "650px",
        left: "23vw",
        border: `3px solid ${palette.primary.dark}`,
        borderRadius: "70px",
    },
    text: {
        position: "absolute",
        width: "600px",
        top: "650px",
        left: "50vw",
        color: "black",
        fontFamily: "Candara",
        fontSize: "33px"
    }
}));

export const WhoAmIComponent: React.FC<WhoAmIComponentProps> = () => {
    const classes = useStyles();
    return (
        <div className={classes.whoAmI}>
            <p className={classes.title}> ABOUT ME</p>
            <img className={classes.face} src='../../../img/face.png' alt="pic" />
            <p className={classes.text}> ble ble ble ble ble ble ble ble ble ble
            ble ble ble ble ble ble ble ble ble ble
            ble ble ble ble ble ble ble ble ble ble
            ble ble ble ble ble ble ble ble ble ble
            ble ble ble ble ble ble ble ble ble ble
            ble ble ble ble ble ble ble ble ble ble
            ble ble ble ble ble ble ble ble ble ble
            ble ble ble ble ble ble ble ble ble ble
            ble ble ble ble ble ble ble ble ble ble
            ble ble ble ble ble ble ble ble ble ble
            </p>
        </div>
    )
}
