import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import { SkillElementComponentProps } from "./types";

const useStyles = makeStyles(({ palette }) => createStyles({
    skillElement: {
        width: "380px",
        color: palette.secondary.dark,


    },
    avatar: {
        color: palette.primary.light,
        backgroundColor: palette.secondary.main,
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .5)',
    },
    grid: {

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
                <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>

    )
}