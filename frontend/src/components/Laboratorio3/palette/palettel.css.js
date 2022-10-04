import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles( theme => ({
wrapper: {
minHeight: '100vh',
display: 'flex',
flexDirection: '',
alignItems: 'center',
justifyContent: 'center',
background:'#fff',

},
main: {
background: theme.palette.colors.main,
color: theme.palette.colors.contrastText,
width: '9rem',
height: '9rem',
},
dark: {
background: theme.palette.colors.dark,
color: theme.palette.colors.contrastText,
width: '9rem',
height: '9rem',
},
light: {
background: theme.palette.colors.light,
color: theme.palette.colors.contrastText,
width: '9rem',
height: '9rem',
},
main2: {
background: theme.palette.secondary.main,
color: theme.palette.secondary.contrastText,
width: '9rem',
height: '9rem',
},
dark2: {
background: theme.palette.secondary.dark,
color: theme.palette.secondary.contrastText,
width: '9rem',
height: '9rem',
},
light2: {
background: theme.palette.secondary.light,
color: theme.palette.secondary.contrastText,
width: '9rem',
height: '9rem',
},
bglight:{
background: '#002884'
}
}));