import React, { useState } from 'react'
import './App.css'
import PortfolioItems from './components/PortfolioItem'
import Data from './portfolioData'
import Sidebar from './components/Sidebar'
import About from './components/About'
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'
import { Drawer, AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        textAlign: 'center'
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}))

function App() {
    const classes = useStyles()

    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Michael Martino&apos;s Portfolio
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <div className={classes.toolbar} />
                    <Sidebar />
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/'>
                            <PortfolioItems
                                data={Data}
                            />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App
