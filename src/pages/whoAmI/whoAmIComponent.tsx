import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { WhoAmIComponentProps } from "./types"

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    whoAmI: {
        backgroundColor: "#dddddd",
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        height: "930px",
        [breakpoints.down('sm')]: {
            height: "750px",
        },
        [breakpoints.down('xs')]: {
            height: "900px",
        },
    },
    title: {
        position: "relative",
        top: "130px",
        color: palette.primary.dark,
        fontFamily: "Candara",
        fontSize: "58px"
    },
    face: {
        position: "absolute",
        width: "250px",
        height: "300px",
        top: "350px",
        left: "20vw",
        border: `3px solid ${palette.primary.dark}`,
        borderRadius: "0px",
        boxShadow: '3px 3px 8px 6px rgba(0, 0, 0, .5)',
        [breakpoints.down('sm')]: {
            left: "5vw",
            width: "200px",
            height: "240px",
        },
        [breakpoints.down('xs')]: {
            left: "50%",
            transform: "translate(-50%, 0)",
            top: "245px"
        },
    },
    text: {
        position: "absolute",
        width: "40vw",
        minWidth: "400px",
        top: "350px",
        left: "50vw",
        color: "black",
        fontFamily: "Candara",
        fontSize: "30px",
        [breakpoints.down('md')]: {
            top: "300px",
        },
        [breakpoints.down('sm')]: {
            fontSize: "20px",
            width: "50vw",
            left: "40vw",
            minWidth: "0px",
            top: "340px",
        },
        [breakpoints.down('xs')]: {
            fontSize: "17px",
            width: "80vw",
            left: "10vw",
            top: "560px",
        },
    }
}));

export const WhoAmIComponent: React.FC<WhoAmIComponentProps> = ({ items }) => {
    const classes = useStyles();

    return (
        <div className={classes.whoAmI} id="WhoAmIComponent">
            <p className={classes.title}> {items.title}</p>
            <img className={classes.face} src={items.picture} alt="pic" />
            <p className={classes.text}> {items.description}</p>
        </div>
    )
}
