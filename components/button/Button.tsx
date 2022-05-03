import { styled } from "../../stitches.config";

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
        color: {
            primary: {
                backgroundColor: '$red10',
                '&:hover': {
                    backgroundColor: '$red9',
                },
                '&:focus': {
                    backgroundColor: '$red11',
                },
            },
            secondary: {
                backgroundColor: '$blue10',
                '&:hover': {
                    backgroundColor: '$blue9',
                },
                '&:focus': {
                    backgroundColor: '$blue11',
                },
            },
        }
    }
});