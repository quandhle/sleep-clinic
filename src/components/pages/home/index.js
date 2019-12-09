import React from 'react';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import doctor from '../../../assets/doctor.png';
import HomeDoctor from './homeDoctor';
import SleepFacts from './sleepFacts';

const styles = theme => ({
    root: {
        padding: 0,
    },
    landing: {
        padding: 0,
    },
    landingImage: {
        width: '100%'
    }
})

class Home extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Container className={classes.root} maxWidth={false}>
                <Container className={classes.landing} maxWidth={false}>
                    <img src={doctor} alt="landing" className={classes.landingImage}/>
                </Container>
                <SleepFacts/>
                <HomeDoctor/>
            </Container>
        )
    }
}

export default withStyles(styles)(Home);
