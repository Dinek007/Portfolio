import React, { useState } from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'

import { ProjektElementComponentProps } from "./types"

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
        boxShadow: '3px 3px 8px 8px rgba(0, 0, 0, .5)',
    },
    linkContainer: {
        backgroundColor: palette.secondary.main,
        color: palette.primary.light,
        width: "230px",
        marginTop: "30px",
        position: "relative",
        height: "40px",
        paddingTop: "15px",
        border: `3px solid ${palette.primary.dark}`,
        borderRadius: "70px",
        boxShadow: '3px 3px 8px 8px rgba(0, 0, 0, .5)',
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
            top: "130px",
            fontSize: "19px"
        },
    },
    descriptionCont: {
        backgroundColor: palette.secondary.dark,
        opacity: 0.9,
        width: "100%",
        position: "absolute",
        top: "0px",
        border: `3px solid ${palette.primary.dark}`,
        borderRadius: "70px",
        height: "320px",
    },
    icon: {
        position: "absolute",
        top: "15px",
        left: "18px",
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
                <a href={data.gitLink} className={classes.linkA} target="blank">
                    <div className={classes.linkContainer}>
                        <GitHubIcon className={classes.icon} />
                        {buttonNames[0]}
                    </div>
                </a>
                <a href={data.wwwLink} className={classes.linkA} target="blank">
                    <div className={classes.linkContainer}>
                        < LanguageIcon className={classes.icon} />
                        {buttonNames[1]}
                    </div>
                </a>
            </div>
        </div>
    )
}