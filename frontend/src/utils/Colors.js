import { createTheme,  } from '@material-ui/core/styles';
import {teal} from '@material-ui/core/colors';
export const Colors = createTheme(
    {
        palette: {
          primary: {
            light: '#757ce8',
            main: teal[500],
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
          info:{
            main:'#2196f3',
          }
          
        },
      }
) 