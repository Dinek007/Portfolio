import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid, { GridSpacing } from '@material-ui/core/Grid';


import { SkillElementComponentProps } from "./types";

const useStyles = makeStyles(({ palette }) => createStyles({
    skillElement: {
        width: '100%',
        maxWidth: 360,
        color: palette.secondary.dark,

    },
    avatar: {
        color: palette.primary.light,
        backgroundColor: palette.secondary.light
    },
    grid: {

    }
}));

export const SkillElement: React.FC<SkillElementComponentProps> = ({ ico = '', primary = '', secondary = '' }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.grid} item xs={3}>
            <List className={classes.skillElement}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>{ico}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={primary} secondary={secondary} />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </Grid>
    )
}