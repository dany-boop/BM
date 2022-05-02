import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // add class active to navbar item
    const activeClass = (path) => {
        return window.location.pathname === path ? 'active' : ''
    }

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container'>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav '>
                            <li className='nav-item'>
                                <Link className={`nav-link ${activeClass('/')}`} aria-current='page' to='/'>Beranda</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className={`nav-link ${activeClass('/bmi')}`} to='/bmi'>BMI</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className={`nav-link ${activeClass('/cicilan')}`} to='/cicilan'>Cicilan Bank</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className={`nav-link ${activeClass('/pajak')}`} to='/pajak'>Pajak PPN</Link>
                            </li>
                            <li className='nav-item dropdown'>
                                <p className='nav-link dropdown-toggle' d='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                    Konversi Bilangan
                                </p>
                                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                    <li>
                                        <Link to='/konversi/biner' className='dropdown-item'>Biner</Link>
                                    </li>
                                    <li>
                                        <Link to='/konversi/oktal' className='dropdown-item'>Oktal</Link>
                                    </li>
                                    <li>
                                        <Link to='/konversi/desimal' className='dropdown-item'>Desimal</Link>
                                    </li>
                                    <li>
                                        <Link to='/konversi/heksadesimal' className='dropdown-item'>Heksadesimal</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Navbar