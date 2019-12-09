import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import links from './links.json';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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
    render() {
        const topBarLinks = links.links.map((item, index) => {
            return (
                <Grid item>
                    <Typography key={index}>{item}</Typography>
                </Grid>
            )
        });

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
