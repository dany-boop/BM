import React, { useState } from 'react'

import TextInput from './TextInput'
import Alert from './Alert'

const FormBMI = () => {
    const [height, setHeight] = useState(0)
    const [mass, setMass] = useState(0)
    const [bmi, setBmi] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const formValid = height > 0 && mass > 0
        if (!formValid) {
            return
        }
        const bmi = mass / (height * height)
        setBmi(bmi)
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>BMI Calculator</h2>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Weight' type='number' onChange={(e) => setMass(e.target.value)} id='weight' value={mass} placeholder='Please input weight' min='30' extra='Kg' margin='me-3' />
                    </div>
                    <div className='form-group my-3'>
                        <TextInput label='height ' type='number' onChange={(e) => setHeight(e.target.value)} id='height' value={height} placeholder='Please input Height' extra='Mt' margin='me-3' />
                    </div>
                    <hr />
                    <div className='d-flex align-items-end justify-content-end'>
                        <button type='submit' className='btn btn-dark'>calculate BMI</button>
                    </div>
                </form>
            </div>
            <div className='card p-3 my-5'>
                <h2 className='text-center fw-bold'>Results</h2>
                {
                    bmi < 18.5 ? <Alert heading='Skinny' type='danger' icons='bi-exclamation-triangle-fill' />
                        : bmi < 25 ? <Alert heading='Normal' type='success' icons='bi-check-circle-fill' />
                            : bmi < 30 ? <Alert heading='Fat Ass' type='warning' icons='bi-exclamation-triangle-fill' />
                                : <Alert heading='Obesity' type='danger' icons='bi-exclamation-triangle-fill' />
                }
            </div>
        </>
    )
}

export default FormBMI