import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { HeaderButton } from '../../components/headerButton'


const useStyles = makeStyles(({ palette }) => createStyles({
    header: {
        backgroundColor: palette.secondary.main,
        position: "fixed",
        top: "0px",
        width: "100vw",
        height: "40px",
        borderBottom: `3px solid ${palette.primary.dark}`,
        fontFamily: "Comic Sans MS"
    },
    buttons: {
        width: "70vw",
        top: "0px",
        position: "relative",
        float: "right"
    },
    paragraph: {
        position: "relative",
        float: "left",
        top: "3px",
        left: "60px",
        color: palette.primary.dark,
        fontFamily: "Comic Sans MS"
    },
    matrix: {
        width: "100vw",
        height: "300px",
        borderBottom: `3px solid ${palette.primary.dark}`,
        borderBottomLeftRadius: "40px",
        borderBottomRightRadius: "40px",
    },
    title: {
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0)",
        top: "110px",
        margin: "0 auto",
        color: palette.primary.dark,
        fontFamily: "Georgia",
        fontSize: "70px"
    }
}));

const buttonsNames = ["About me", "My skills", "My projekts", "Contact"]

export const HeaderComponent = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.header}>
                <h2 className={classes.paragraph}> PORTFOLIO PAGE </h2>
                <div className={classes.buttons}>
                    {
                        buttonsNames.map((item, index) =>
                            <HeaderButton key={index} text={item} />
                        )
                    }
                </div>
            </div>
            <p className={classes.title} > DAMIAN WILK </p>
            <img className={classes.matrix} src='../../../img/matrix.png' alt="pic" />
        </>
    )
}
