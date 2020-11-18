import React, { useState } from 'react'
import './App.css'
import PortfolioItems from './components/PortfolioItem'
import Data from './portfolioData'
import Sidebar from './components/Sidebar'
import About from './components/About'
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'

function App() {
    const [page, setPage] = useState('projects')

    return (
        <div className='App'>
            <Sidebar setPage={setPage} />
            <About page={page === 'about'} />
            <PortfolioItems
                data={Data}
                page={page === 'projects'} />
        </div>
    )
}

export default App
