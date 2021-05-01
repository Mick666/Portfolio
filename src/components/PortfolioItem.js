import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
            <a href={item.live}>
                <img className='portfolio-image' src={item.image} />
            </a>
            <div className='portfolio-description'>
                {item.text.map(para => {
                    if (typeof para === 'string') {
                        return <span>{para}</span>
                    } else {
                        return (
                            <ul>
                                {para.map((dotpoint, liKey) => <li key={liKey}>{dotpoint}</li>)}
                            </ul>
                        )
                    }
                })}
            </div>
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