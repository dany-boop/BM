import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    // get year now
    const year = new Date().getFullYear()

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4">
                    <span className="text-muted">&copy; {year} BMI</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="https://github.com/dany-boop" target='_blank' rel='noreferrer'>
                            <i className="bi bi-github"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>

    )
}

export default Footer