import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { SkillElement } from '../../components/skillElement'

import { MySkillsComponentProps } from "./types";


const useStyles = makeStyles(({ palette }) => createStyles({
    mySkills: {
        backgroundColor: palette.primary.light,
        position: "relative",
        width: "100vw",
        top: "-350px",
        height: "830px",
        zIndex: -3
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
        flexDirection: "column",
        flexWrap: "wrap",
        height: "400px",
        width: "80vw",
        marginLeft: "10vw"
    }
}));



export const MySkillsComponent: React.FC<MySkillsComponentProps> = ({ skillsLibrary }) => {
    const classes = useStyles();
    return (
        <div className={classes.mySkills}>
            <p className={classes.title}>@_MY_SKILLS</p>
            <div className={classes.list}>
                {
                    skillsLibrary.map((item, index) =>

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
