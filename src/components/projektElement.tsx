import React, { useState } from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import { ProjektElementComponentProps } from "./types";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    projekt: {
        textAlign: "center",
        width: "600px",
        height: "500px",
        borderRadius: "0",
        fontSize: "20px",
        fontFamily: "Candara",
        position: "relative",
        marginBottom: "60px"
    },
    picture: {
        width: "100%",
        border: `3px solid ${palette.primary.dark}`,
        borderRadius: "70px",
        height: "320px",
    },
    linkContainer: {
        backgroundColor: palette.secondary.main,
        color: palette.primary.light,
        width: "230px",
        marginTop: "15px",
        position: "relative",
        height: "40px",
        paddingTop: "13px",
        border: `3px solid ${palette.primary.dark}`,
        borderRadius: "70px",
        "&:hover": {
            backgroundColor: palette.secondary.dark,
        },
    },
    linkA: {
        textDecoration: "none"
    },
    linksBox: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",

    },
    description: {
        width: "70%",
        position: "absolute",
        float: "left",
        left: "15%",
        top: "160px",
        transform: "translate(0, -50%)",
        color: palette.primary.light,
        fontSize: "25px",
        [breakpoints.down('xs')]: {
            top: "90px",
            fontSize: "15px"
        },
    },
    descriptionCont: {
        backgroundColor: palette.secondary.dark,
        opacity: 0.7,
        width: "100%",
        position: "absolute",
        top: "0px",
        border: `3px solid ${palette.primary.dark}`,
        borderRadius: "70px",
        height: "320px",
    },
    icon: {
        position: "absolute",
        top: "12px",
        left: "8px",
    }
}));

export const ProjektElement: React.FC<ProjektElementComponentProps> = ({ data, buttonNames }) => {
    const classes = useStyles();
    const [isShown, setIsShown] = useState(false);
    return (
        <div className={classes.projekt}>
            <div
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                <img className={classes.picture} src={data.linkPicture} alt="pic" />
                {isShown && (
                    <>
                        <div className={classes.descriptionCont}></div>
                        <p className={classes.description}> {data.description} </p>
                    </>
                )}
            </div>
            <div className={classes.linksBox}>
                <a href={data.gitLink} className={classes.linkA}>
                    <div className={classes.linkContainer}>
                        <GitHubIcon className={classes.icon} />
                        {buttonNames[0]}
                    </div>
                </a>
                <a href={data.wwwLink} className={classes.linkA}>
                    <div className={classes.linkContainer}>
                        < LanguageIcon className={classes.icon} />
                        {buttonNames[1]}
                    </div>
                </a>
            </div>
        </div>
    )
}