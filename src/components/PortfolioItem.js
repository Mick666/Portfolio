import React from 'react'
import ImageGallery from 'react-image-gallery'

const PortfolioItem = ({ item }) => {
    return (
        <div className='portfolio-item'>
            <h1>{item.title}</h1>
            <ImageGallery items={item.images} />
            <p className='item-text'>{item.text}</p>
            <div className='portfolio-links'>
                <a href={item.live}>Live</a> | <a href={item.source}>Source</a>
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