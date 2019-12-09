import React from 'react';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        backgroundColor: 'pink',
        height: '30vh'
    }
})

const Footer = withStyles(styles)(props => {
    const { classes } = props;

    return (
        <Container className={classes.root}>
            Footer
        </Container>
    )
})

export default Footer;
