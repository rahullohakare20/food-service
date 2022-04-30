import { styled } from '@mui/material/styles';

export const ProductCardWrapper = styled('div')(({ theme }) => {
    return ({
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        minHeight: 190,
        display: 'flex',
        ['.subCard']: {
            display: 'flex',
            borderRadius: 3,
            border: `1px solid ${theme.palette.primary.shadow}`,
            padding: theme.spacing(1),
            boxShadow: `2px 3px ${theme.palette.primary.shadow}`
        },
        ['.subCardContainer']: {
            padding: `0  ${theme.spacing(2)}`,
        },
        ['.subCardImage']: {
            height: 'auto',
            width: 100
        },
        ['.card']: {
            padding: theme.spacing(1),
            boxShadow: `3px 3px ${theme.palette.primary.shadow}`

        },
        ['.MuiCardHeader-title']: {
            fontSize: '1.2rem',
            display: 'flex',
            justifyContent: 'start',
            color: 'grey',
            textTransform: 'capitalize',
            fontWeight: 600
        },
        ['.priceDetail']: {
            display: 'flex',
            marginTop: '0.9rem'
        },
        ['.quantity']: {
            marginRight: theme.spacing(2),
            fontSize: '1.5rem',
            color: theme.palette.primary.darkText,
            fontWeight: 600
        },
        ['.price']: {
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '0.5rem',
            color: theme.palette.primary.price
        },
        ['.subCard .priceContainer']: {
            width: '100%',
            paddingTop: 0,
            paddingBottom: 0
        },
        ['.type']: {
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'start',
            textTransform: 'capitalize',
            fontWeight: 500,
            color: theme.palette.primary.text
        }
    })
});

export const ProductContainerWrapper = styled('div')(({ theme }) => {
    return ({
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '0 150px',
    })
});

export const MainWrapper = styled('div')(({ theme }) => {
    return ({
        display: 'flex',
        justifyContent: 'center',
        ['.header']: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'solid 1px grey',
            borderRadius: '5px',
            boxShadow: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.palette.primary.shadow}`,
            marginBottom: theme.spacing(4)
        },
        ['.add']: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ['.addButton']: {
                outline: theme.palette.primary.profile,
                boxShadow: `4px 4px ${theme.palette.primary.shadow}`
            }
        }
    })
});