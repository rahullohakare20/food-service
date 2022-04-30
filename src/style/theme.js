import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({ 
  palette: {
    mode: 'light',
    primary: {
      main: '#f7f7f7',
      contrastText:  '#EBAFE',
      shadow: '#D3D3D3',
      price: '#32CD32',
      profile: '#5E7BFD',
      text: '#868B8E',
      darkText: '#EBAFE',
      buttonText: 'white'
      
    },
    secondary: {
      main: '#5E7BFD',
    },
  },
});

export default theme;