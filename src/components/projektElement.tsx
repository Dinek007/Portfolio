import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import { ProjektElementComponentProps } from "./types";

const useStyles = makeStyles(({ palette }) => createStyles({
    projekt: {
        marginLeft: "0px",
        textAlign: "center",
        color: palette.primary.main,
        width: "50%",
        height: "500px",
        borderRadius: "0",
        fontSize: "20px",
        fontFamily: "Candara",
        position: "relative",
    },
    picture: {
        width: "80%",
        border: `3px solid ${palette.primary.dark}`,
        borderRadius: "70px",
    },
    link: {
        backgroundColor: "aqua",
        width: "20%",
        position: "relative",
        float: "left",
        marginLeft: "20%",
        marginTop: "30px",
        height: "40px"
    },
    description: {
        width: "70%",
        position: "relative",
        float: "left",
        left: "15%",
        top: "3px"
    }
}));

export const ProjektElement: React.FC<ProjektElementComponentProps> = () => {
    const classes = useStyles();

    return (
        <div className={classes.projekt}>
            <img className={classes.picture} src='../../../img/matrix.png' alt="pic" />
            <p className={classes.description}>
                ble ble ble ble ble ble ble ble ble ble
                ble ble ble ble ble ble ble ble ble ble ble
                ble ble ble ble ble ble ble ble ble ble ble
                ble ble ble ble ble ble ble ble ble ble ble
            </p>
            <a href="www.google.com">
                <div className={classes.link}>
                    <LanguageIcon />
                    GIT Reposytory
                </div>
            </a>
            <a href="www.google.com">
                <div className={classes.link}>
                    <GitHubIcon />
                    WWW Page
                </div>
            </a>

        </div>
    )
}