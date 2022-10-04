import React from 'react'
import {useStyles} from './palettel.css';

export const Palette = () => {
    const classes = useStyles();
  return (
    <div className={classes.wrapper}>
        <div className={classes.main}>main</div>
        <div className={classes.dark}>dark</div>
        <div className={classes.light}>Light</div>
        <div className={classes.main2}>.main2</div>
        <div className={classes.dark2}>.dark2</div>
        <div className={classes.light2 }>.light2</div>
    </div>
  )
}
