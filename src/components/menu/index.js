import React from 'react';
import { Grid, Container } from '@material-ui/core';
import links from './links.json';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
    overrides: {
        MuiGrid: {
            container: {
                margin: '0 !important',
                height: '5vh',
                width: '100%'
            },
            item: {
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        },
    }
});

class MenuBar extends React.Component {
    renderLinks = () => {
        const topBarLinks = links.links.map(this.buildLink);

        return (
            <React.Fragment>
                {topBarLinks}
            </React.Fragment>
        )
    }

    buildLink = (item, index) => {
        return (
            <Grid item key={index}>
                <Link to={item.to}>{item.text}</Link>
            </Grid>
        )
    }

    render() {
        const topBarLinks = this.renderLinks();

        return (
            <Container>
                <MuiThemeProvider theme={theme}>
                    <Grid container spacing={3} justify='flex-end'>
                        {topBarLinks}
                    </Grid>
                </MuiThemeProvider>
            </Container>
        )
    }
}

export default MenuBar;
