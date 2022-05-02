import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Main = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='container my-5'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Main