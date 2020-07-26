import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { MySkillsComponentProps } from "./types";
import { SkillElement } from '../../components/skillElement'

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    mySkills: {
        backgroundColor: palette.primary.light,
        position: "relative",
        width: "100%",
        height: "860px",
        [breakpoints.down('sm')]: {
            height: "1500px",
        },
    },
    title: {
        position: "relative",
        top: "90px",
        color: palette.secondary.main,
        fontFamily: "Candara",
        fontSize: "58px",
    },
    list: {
        marginTop: "190px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        height: "400px",
        width: "80vw",
        marginLeft: "10vw",
        [breakpoints.down('sm')]: {
            marginLeft: "20vw",
            width: "60vw",
            height: "800px",
        },
    }
}));

export const MySkillsComponent: React.FC<MySkillsComponentProps> = ({ items }) => {
    const classes = useStyles();
    return (
        <div className={classes.mySkills}>
            <p className={classes.title}> {items.title} </p>
            <div className={classes.list}>
                {
                    items.skillNames.map((item, index) =>
                        <SkillElement
                            key={index}
                            ico={item.ico}
                            primary={item.name}
                            secondary={item.description}
                        />
                    )
                }
            </div>
        </div>
    )
}
