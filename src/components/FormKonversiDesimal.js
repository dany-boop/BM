import React, { useState } from 'react'

import Alert from './Alert'
import TextInput from './TextInput'

function FormKonversiDesimal() {
    const [desimal, setDesimal] = useState(0)
    const [option, setOption] = useState(0)
    const [hasil, setHasil] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const decimalToBiner = parseInt(desimal, 10).toString(2)
        const decimalToOktal = parseInt(desimal, 10).toString(8)
        const decimalToHeksa = parseInt(desimal, 10).toString(16)

        if (option === 'biner') {
            setHasil(decimalToBiner)
        } else if (option === 'octal') {
            setHasil(decimalToOktal)
        } else if (option === 'hexsadecimal') {
            setHasil(decimalToHeksa)
        }
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Decimmal number Conversion</h2>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Desimal' type='number' onChange={(e) => setDesimal(e.target.value)} value={desimal} id='biner' placeholder='Please input number' />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Choose type of number</label>
                        <select className='form-select' id='option' onChange={(e) => setOption(e.target.value)} value={option}>
                            <option value='heksadesimal'>Hexadecimal</option>
                            <option value='biner'>Biner</option>
                            <option value='oktal'>Octal</option>
                        </select>
                    </div>
                    <hr />
                    <div className='d-flex align-items-end justify-content-end'>
                        <button type='submit' className='btn btn-dark'>Calculate Conversion</button>
                    </div>
                </form>
            </div>
            <div className='card p-3 my-5'>
                <h2 className='text-center fw-bold'>Results</h2>
                <Alert heading={`results : ${hasil}`} icons='bi bi-info-circle-fill' type='info' />
            </div>
        </>
    )
}

export default FormKonversiDesimal