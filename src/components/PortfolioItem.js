import React from 'react'
import ImageGallery from 'react-image-gallery'

const PortfolioItem = ({ item }) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <ImageGallery items={item.images} />
            <p className='item-text'>{item.text}</p>
        </div>
    )
}

const PortfolioItems = ({ page, data }) => {
    if (!page) return null

    return (
        <div className='portfolio-items'>
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