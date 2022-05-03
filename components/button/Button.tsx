import {styled} from "../../stitches.config";

function generateVariantColors(colors: string[]) {
    let variantColors: any = {};
    colors.forEach((color: string) => {
        variantColors[color] = {
            backgroundColor: `$${color}`,
            '&:hover': {
                backgroundColor: `$${color}Tint`,
            },
            '&:focus': {
                backgroundColor: `$${color}Shade`,
            },
        };
    });
    return variantColors;
}

export const Button = styled('button', {
    px: '$2',
    py: '$1',
    color: '$white',
    cursor: 'pointer',
    textDecoration: 'none',
    border: 0,
    borderRadius: 8,

    backgroundColor: '$gray10',
    '&:hover': {
        backgroundColor: '$gray9',
    },
    '&:focus': {
        backgroundColor: '$gray11',
    },

    variants: {
        color: generateVariantColors([
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
        ]),
    }
});
