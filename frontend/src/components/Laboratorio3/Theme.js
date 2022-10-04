import {createTheme, CssBaseline, ThemeProvider} from '@material-ui/core';
import { deepPurple } from '@mui/material/colors';
const theme = createTheme({
typography: {
fontFamily: 'Arial'
},
overrides: {
body: {
fontFamily: ['Arial']
}
},
palette: {
colors: {
light: '#757ce8',
main: '#673ab7',
dark: '#002884',
contrastText: '#fff'
},
secondary: {
light: '#ff7961',
main: '#f44336',
dark: '#ba000d',
contrastText: '#000',
}
}
});
export const Theme = ({children}) => (
<ThemeProvider theme={ theme }>
<CssBaseline />
{children}
</ThemeProvider>
);