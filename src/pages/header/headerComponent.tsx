import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { HeaderButton } from '../../components/headerButton'
import { HeaderComponentProps } from "./types";


const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    header: {
        backgroundColor: palette.secondary.main,
        position: "fixed",
        top: "0px",
        width: "100vw",
        height: "40px",
        borderBottom: `3px solid ${palette.primary.dark}`,
        zIndex: 3,
        [breakpoints.down('xs')]: {
            height: "80px",
        },
    },
    buttons: {
        width: "70vw",
        top: "0px",
        position: "relative",
        float: "right",
        [breakpoints.down('sm')]: {
            width: "100vw",
        },
        [breakpoints.down('xs')]: {
            top: "50%",
            transform: "translate(0, -50%)"
        },
    },
    paragraph: {
        position: "relative",
        float: "left",
        top: "3px",
        left: "60px",
        color: palette.primary.dark,
        fontSize: "30px",
        fontFamily: "Candara",
        [breakpoints.down('sm')]: {
            width: "0px",
            fontSize: "0px"
        },
    },
    matrix: {
        width: "100%",
        height: "450px",
        borderBottom: `5px solid ${palette.primary.main}`,
        borderBottomLeftRadius: "70px",
        borderBottomRightRadius: "70px",
    },
    title: {
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0)",
        top: "150px",
        margin: "0 auto",
        color: palette.primary.main,
        fontSize: "90px",
        fontFamily: "Candara",
        width: "100%"
    }
}));

export const HeaderComponent: React.FC<HeaderComponentProps> = ({ items }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.header}>
                <p className={classes.paragraph}> {items.description} </p>
                <div className={classes.buttons}>
                    {
                        items.buttonsNames.map((item, index) =>
                            <HeaderButton key={index} text={item} />
                        )
                    }
                </div>
            </div>
            <p className={classes.title}> {items.title} </p>
            <img className={classes.matrix} src={items.picture} alt="pic" />
        </>
    )
}
