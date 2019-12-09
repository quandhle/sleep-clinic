import React from 'react';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import portrait from '../../../assets/portrait.png';

// remove 1px line after section
const styles = theme => ({
    root: {
        backgroundColor: 'green',
        padding: 0,
        display: 'flex',
        flexDirection: 'row'
    },
    homeAbout: {
        width: '50%'
    },
    image: {
        width: '100%'
    }
})

const HomeDoctor = withStyles(styles)((props) => {
    const { classes } = props;

    return (
        <Container className={classes.root} maxWidth={false}>
            <div className={classes.homeAbout}>
                <img src={portrait} alt="kim-portrait-home" className={classes.image}/>
            </div>
            <div className={classes.homeAbout}>
                <p>Dr. Kimberly Troung</p>
                <p>Kim is cool</p>
                <p>Be like kim</p>
            </div>
        </Container>
    )
})

export default HomeDoctor;
