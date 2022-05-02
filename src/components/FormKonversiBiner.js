import React, { useState } from 'react'

import Alert from './Alert'
import TextInput from './TextInput'

function FormKonversiBiner() {
    const [biner, setBiner] = useState(0)
    const [option, setOption] = useState(0)
    const [hasil, setHasil] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const binerToDecimal = parseInt(biner, 2)

        if (option === 'desimal') {
            setHasil(binerToDecimal)
        } else if (option === 'oktal') {
            setHasil(binerToDecimal.toString(8))
        } else if (option === 'heksadesimal') {
            setHasil(binerToDecimal.toString(16))
        }
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Biner number Conversion</h2>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Biner' type='number' onChange={(e) => setBiner(e.target.value)} value={biner} id='biner' placeholder='Please input number' />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Choose type of number</label>
                        <select className='form-select' id='option' onChange={(e) => setOption(e.target.value)} value={option}>
                            <option value='oktal'>Octal</option>
                            <option value='desimal'>Decimal</option>
                            <option value='heksadesimal'>Hexadecimal</option>
                        </select>
                    </div>
                    <hr />
                    <div className='d-flex align-items-end justify-content-end'>
                        <button type='submit' className='btn btn-dark'>calculate conversion</button>
                    </div>
                </form>
            </div>
            <div className='card p-3 my-5'>
                <h2 className='text-center fw-bold'>Results</h2>
                <Alert heading={`Hasil akhir : ${hasil}`} icons='bi bi-info-circle-fill' type='info' />
            </div>
        </>
    )
}

export default FormKonversiBiner