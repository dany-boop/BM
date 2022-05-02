import React, { useState } from 'react'

import Alert from './Alert'
import TextInput from './TextInput'

function FormKonversiOktal() {
    const [oktal, setOktal] = useState(0)
    const [option, setOption] = useState(0)
    const [hasil, setHasil] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const oktalToDecimal = parseInt(oktal, 8)

        if (option === 'decimal') {
            setHasil(oktalToDecimal)
        } else if (option === 'biner') {
            setHasil(oktalToDecimal.toString(2))
        } else if (option === 'hexadecimal') {
            setHasil(oktalToDecimal.toString(16))
        }
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Octal number Conversion</h2>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Oktal' type='number' onChange={(e) => setOktal(e.target.value)} value={oktal} id='biner' placeholder='Silakan masukkan nominal disini' />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Choose</label>
                        <select className='form-select' id='option' onChange={(e) => setOption(e.target.value)} value={option}>
                            <option value='desimal'>Decimal</option>
                            <option value='heksadesimal'>Hexadecimal</option>
                            <option value='biner'>Biner</option>
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
                <Alert heading={`Results : ${hasil}`} icons='bi bi-info-circle-fill' type='info' />
            </div>
        </>
    )
}

export default FormKonversiOktal