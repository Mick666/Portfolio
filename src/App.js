import React, { useState } from 'react'
import './App.css'
import PortfolioItems from './components/PortfolioItem'
import Data from './portfolioData'
import Sidebar from './components/Sidebar'
import About from './components/About'

function App() {
    const [page, setPage] = useState('projects')

    return (
        <div className='App'>
            <Sidebar setPage={setPage} />
            <About page={page} />
            <PortfolioItems
                data={Data}
                page={page} />
        </div>
    )
}

export default App
