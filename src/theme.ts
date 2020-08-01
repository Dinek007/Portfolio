import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const colors = {
    green: '#99cc44',
    grey: "#333333"
}

export const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: colors.green
        },
        secondary: {
            main: colors.grey
        },
    }
}))
