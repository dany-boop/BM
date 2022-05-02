import React from 'react'
import Main from '../layouts/Main'

const Home = () => {
    return (
        <>
            <Main>
                <div className='container my-5'>
                    <h1 className="display-4">Welcome to Calculate those things in navbar</h1>
                    <a className="btn btn-dark btn-lg" href="https://github.com/dany-boop" role="button">Source Code</a>
                </div>
            </Main>
        </>
    )
}

export default Home