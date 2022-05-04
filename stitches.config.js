import {
    amber,
    amberDark,
    purple,
    purpleDark,
    blue,
    blueDark,
    gray,
    grayDark,
    green,
    greenDark,
    orange,
    orangeDark,
    red,
    redDark
} from "@radix-ui/colors";
import {createStitches} from "@stitches/react";

const {styled, createTheme} = createStitches({
    utils: {
        p: (value) => ({
            paddingTop: value,
            paddingBottom: value,
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        px: (value) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        pt: (value) => ({
            paddingTop: value,
        }),
        pb: (value) => ({
            paddingBottom: value,
        }),
        pl: (value) => ({
            paddingLeft: value,
        }),
        pr: (value) => ({
            paddingRight: value,
        }),

        m: (value) => ({
            marginTop: value,
            marginBottom: value,
            marginLeft: value,
            marginRight: value,
        }),
        my: (value) => ({
            marginTop: value,
            marginBottom: value,
        }),
        mx: (value) => ({
            marginLeft: value,
            marginRight: value,
        }),
        mt: (value) => ({
            marginTop: value,
        }),
        mb: (value) => ({
            marginBottom: value,
        }),
        ml: (value) => ({
            marginLeft: value,
        }),
        mr: (value) => ({
            marginRight: value,
        }),
    }
});

const commonTheme = {
    sizes: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '30px',
    },
    space: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '30px',
    },
    fonts: {
        system: 'system-ui',
    },
}

const lightTheme = createTheme({
    colors: {
        ...gray,
        ...blue,
        ...red,
        ...green,
        ...orange,

        white: gray.gray1,
        black: gray.gray12,

        background: gray.gray1,

        primary: orange.orange10,
        primaryTint: orange.orange9,
        primaryShade: orange.orange11,

        secondary: purple.purple10,
        secondaryTint: purple.purple9,
        secondaryShade: purple.purple11,

        success: green.green10,
        successTint: green.green9,
        successShade: green.green11,

        danger: red.red10,
        dangerTint: red.red9,
        dangerShade: red.red11,

        warning: amber.amber10,
        warningTint: amber.amber9,
        warningShade: amber.amber11,

        info: blue.blue10,
        infoTint: blue.blue9,
        infoShade: blue.blue11,
    },
    ...commonTheme,
});

const darkTheme = createTheme({
    colors: {
        ...grayDark,
        ...blueDark,
        ...redDark,
        ...greenDark,
        ...orangeDark,

        white: gray.gray1,
        black: gray.gray12,

        background: grayDark.gray1,

        primary: orangeDark.orange10,
        primaryTint: orangeDark.orange9,
        primaryShade: orangeDark.orange11,

        secondary: purpleDark.purple10,
        secondaryTint: purpleDark.purple9,
        secondaryShade: purpleDark.purple11,

        success: greenDark.green10,
        successTint: greenDark.green9,
        successShade: greenDark.green11,

        danger: redDark.red10,
        dangerTint: redDark.red9,
        dangerShade: redDark.red11,

        warning: amberDark.amber10,
        warningTint: amberDark.amber9,
        warningShade: amberDark.amber11,

        info: blueDark.blue10,
        infoTint: blueDark.blue9,
        infoShade: blueDark.blue11,
    },
    ...commonTheme,
});

export {styled, lightTheme, darkTheme};
