import { blue, blueDark, gray, grayDark, green, greenDark, red, redDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

const { styled, createTheme } = createStitches({
    utils: {
        p: (value) => ({
            paddingTop: value,
            paddingBottom: value,
            paddingLeft: value,
            paddingRight: value,
        }),
        m: (value) => ({
            marginTop: value,
            marginBottom: value,
            marginLeft: value,
            marginRight: value,
        }),
        py: (value) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        px: (value) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        my: (value) => ({
            marginTop: value,
            marginBottom: value,
        }),
        mx: (value) => ({
            marginLeft: value,
            marginRight: value,
        }),
    }
});

const lightTheme = createTheme({
    colors: {
        ...gray,
        ...blue,
        ...red,
        ...green,

        white: gray.gray1,
        background: gray.gray1,
    },
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
});

const darkTheme = createTheme({
    colors: {
        ...grayDark,
        ...blueDark,
        ...redDark,
        ...greenDark,

        white: gray.gray1,
        background: blueDark.blue2,
    },
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
});

export { styled, lightTheme, darkTheme };