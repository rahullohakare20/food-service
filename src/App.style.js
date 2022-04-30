import { styled } from '@mui/material/styles';
export const AppContainer = styled('div')(({ theme }) => {
    return ({
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        padding: '3rem'
    })
});