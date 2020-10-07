import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import { SkillElementComponentProps } from "./types";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    skillElement: {
        width: "340px",
        color: palette.secondary.dark,
        fontWeight: "bolder",
        [breakpoints.down('md')]: {
            width: "360px",
        },
    },
    avatar: {
        color: palette.primary.light,
        backgroundColor: palette.secondary.main,
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .5)',
    },
    text: {
        fontWeight: "bolder",
    }
}));

export const SkillElement: React.FC<SkillElementComponentProps> = ({ ico = '', primary = '', secondary = '' }) => {
    const classes = useStyles();

    return (
        <List className={classes.skillElement}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>{ico}</Avatar>
                </ListItemAvatar>
                <ListItemText className={classes.text} primary={primary} secondary={secondary} />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>

    )
}