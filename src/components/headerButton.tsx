import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(({ palette }) => createStyles({
    item: {
        marginLeft: "0px",
        textAlign: "center",
        color: palette.primary.main,
        width: "15vw",
        height: "35px",
        borderRadius: "0",
        fontFamily: "Comic Sans MS"
    },
}));

export const HeaderButton = ({ text = 'aaaaaaa' }) => {
    const classes = useStyles();

    return (
        <Button className={classes.item}> <h3>{text}</h3> </Button>
    )
}