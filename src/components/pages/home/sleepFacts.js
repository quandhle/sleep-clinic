import React from 'react';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import statistics from './facts.json';

const borderWidth = '1px';
const styles = theme => ({
    root: {
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        boxSizing: 'border-box'
    },
    fact: {
        height: '33%',
        width: '33%',
        borderColor: '#595959',
        borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    fact0: {
        borderWidth: `0 ${borderWidth} ${borderWidth} 0`,
    },
    fact1: {
        borderWidth: `0 ${borderWidth} ${borderWidth} ${borderWidth}`,
    },
    fact2: {
        borderWidth: `0 0 ${borderWidth} ${borderWidth}`
    },
    fact3: {
        borderWidth: `${borderWidth} ${borderWidth} 0 0`
    },
    fact4: {
        borderWidth: `${borderWidth} ${borderWidth} 0`
    },
    fact5: {
        borderWidth: `${borderWidth} 0 0 ${borderWidth}`
    }
})

const sleepFacts = withStyles(styles)((props) => {
    const { classes } = props;
    const facts = Object.keys(statistics).map(key => {
        const { value, description } = statistics[key];

        return (
            <div className={`${classes.fact} ${classes[`fact${key}`]}`} key={key}>
                <div className={value}>{value}</div>
                <div className="description">{description}</div>
            </div>
        )
    })

    return (
        <Container className={classes.root}>
            {facts}
        </Container>
    )
})

export default sleepFacts;
