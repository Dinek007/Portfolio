import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import { ProjektElementComponentProps } from "./types";

const useStyles = makeStyles(({ palette }) => createStyles({
    projekt: {
        marginLeft: "0px",
        textAlign: "center",

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
        backgroundColor: palette.secondary.main,
        color: palette.primary.light,
        width: "205px",
        position: "relative",
        float: "left",
        marginLeft: "15%",
        marginTop: "30px",
        height: "40px",
        paddingTop: "10px",
        border: `3px solid ${palette.primary.dark}`,
        borderRadius: "70px",
    },
    description: {
        width: "70%",
        position: "absolute",
        float: "left",
        left: "15%",
        top: "3px",
        color: palette.primary.dark,
        zIndex: 0,

    },
    icon: {
        position: "absolute",
        top: "11px",
        left: "8px",

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
                    <GitHubIcon className={classes.icon} />
                    GIT Reposytory
                </div>
            </a>
            <a href="https://material-ui.com/components/typography/">
                <div className={classes.link}>
                    < LanguageIcon className={classes.icon} />
                    WWW Page
                </div>
            </a>

        </div>
    )
}