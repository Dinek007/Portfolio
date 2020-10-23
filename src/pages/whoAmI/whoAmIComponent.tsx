import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { WhoAmIComponentProps } from "./types"

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    whoAmI: {
        backgroundColor: "#dddddd",
        position: "relative",
        width: "100%",

        height: "1100px",
        [breakpoints.down('sm')]: {
            height: "1100px",
        },
        [breakpoints.down('xs')]: {
            height: "1100px",
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
        border: `4px solid ${palette.secondary.light}`,
        borderRadius: "30px",
        boxShadow: '3px 3px 8px 6px rgba(0, 0, 0, .5)',
        [breakpoints.down('md')]: {
            left: "15vw",

        },
        [breakpoints.down('sm')]: {
            left: "50%",
            transform: "translate(-50%, 0)",
            width: "200px",
            height: "240px",
            top: "300px"
        },
        [breakpoints.down('xs')]: {
            left: "50%",
            transform: "translate(-50%, 0)",
            top: "300px"
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
            width: "80vw",
            left: "10vw",
            minWidth: "0px",
            top: "650px",
        },
        [breakpoints.down('xs')]: {
            fontSize: "17px",
            width: "80vw",
            left: "10vw",
            top: "650px",
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
