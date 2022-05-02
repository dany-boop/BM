import React, { useState } from 'react'

import Alert from './Alert'
import TextInput from './TextInput'

function FormKonversiHeksa() {
    const [heksa, setHeksa] = useState(0)
    const [option, setOption] = useState(0)
    const [hasil, setHasil] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const heksaToDecimal = parseInt(heksa, 16)

        if (option === 'decimal') {
            setHasil(heksaToDecimal)
        } else if (option === 'octal') {
            setHasil(heksaToDecimal.toString(8))
        } else if (option === 'biner') {
            setHasil(heksaToDecimal.toString(2))
        }
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Hexadecimal Number Conversion</h2>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Heksadesimal' type='text' onChange={(e) => setHeksa(e.target.value)} value={heksa} id='biner' placeholder='Silakan masukkan nominal disini' />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Choose</label>
                        <select className='form-select' id='option' onChange={(e) => setOption(e.target.value)} value={option}>
                            <option value='biner'>Biner</option>
                            <option value='oktal'>Octal</option>
                            <option value='desimal'>Decimal</option>
                        </select>
                    </div>
                    <hr />
                    <div className='d-flex align-items-end justify-content-end'>
                        <button type='submit' className='btn btn-dark'>Calculate</button>
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

export default FormKonversiHeksa