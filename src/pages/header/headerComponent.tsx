import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { HeaderButton } from '../../components/headerButton'
import { HeaderComponentProps } from "./types";


const useStyles = makeStyles(({ palette }) => createStyles({
    header: {
        backgroundColor: palette.secondary.main,
        position: "fixed",
        top: "0px",
        width: "100vw",
        height: "40px",
        borderBottom: `3px solid ${palette.primary.dark}`,
        zIndex: 30
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
        fontSize: "30px",
        fontFamily: "Candara"
    },
    matrix: {
        width: "100vw",
        height: "450px",
        borderBottom: `5px solid ${palette.primary.main}`,
        borderBottomLeftRadius: "70px",
        borderBottomRightRadius: "70px",
    },
    title: {
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0)",
        top: "200px",
        margin: "0 auto",
        color: palette.primary.main,
        fontSize: "90px",
        fontFamily: "Candara"
    }
}));

const buttonsNames = ["About me", "My skills", "My projekts", "Contact"]

export const HeaderComponent: React.FC<HeaderComponentProps> = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.header}>
                <p className={classes.paragraph}> PORTFOLIO PAGE </p>
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
