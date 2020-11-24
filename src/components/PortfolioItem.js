import React from 'react'
import ImageGallery from 'react-image-gallery'
import { Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    textSection: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        marginTop: '25px'
    },
    projectLinks: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        color: 'white',
        textDecoration: 'underline'
    }
}))

const PortfolioItem = ({ item }) => {
    const classes = useStyles()

    return (
        <div className='portfolio-item'>
            <h1>{item.title}</h1>
            <ImageGallery items={item.images} />
            <Typography className={classes.textSection}>{item.text}</Typography>
            <div className='portfolio-links'>
                <Link href={item.live} className={classes.projectLinks}>Live</Link>&nbsp;|&nbsp;
                <Link href={item.source} className={classes.projectLinks}>Source</Link>
            </div>
        </div>
    )
}

const PortfolioItems = ({ data }) => {

    return (
        <div className='portfolio-items-parent'>
            {data.map((item, index) =>
                <PortfolioItem
                    key={index}
                    item={item}
                />
            )}
        </div>
    )
}

export default PortfolioItems