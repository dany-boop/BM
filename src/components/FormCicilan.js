import React, { useState } from 'react'

import TextInput from './TextInput'
import Modal from './Modal'
import Alert from './Alert'

function FormCicilan() {
    const [nominal, setNominal] = useState(0)
    const [bunga, setBunga] = useState(0)
    const [periode, setPeriode] = useState(0)
    const [hasil, setHasil] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const formValid = nominal > 0 && bunga > 0 && periode > 0
        if (!formValid) {
            return
        }
        const cicilan = nominal / periode + ((nominal / periode) * (bunga / 100))
        setHasil(cicilan)
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Bank instalment Calculator</h2>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Nominal (ex: 5000000)' onChange={(e) => setNominal(e.target.value)} value={nominal} id='nominal' type='number' placeholder='Silakan masukkan nominal disini' />
                    </div>
                    <div className='form-group mb-3'>
                        <TextInput label='Bank interest (ex: 25)' onChange={(e) => setBunga(e.target.value)} value={bunga} type='number' placeholder='Please input nominal' margin='me-4' extra='%' />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Periode</label>
                        <div className='d-flex align-items-center'>
                            <select className='form-select me-3' onChange={(e) => setPeriode(e.target.value)} value={periode}>
                                <option value='6'>6 Months</option>
                                <option value='12'>12 Months</option>
                                <option value='18'>18 Months</option>
                                <option value='24'>24 Months</option>
                                <option value='30'>30 Months</option>
                                <option value='36'>36 Months</option>
                            </select>
                            <span>Months</span>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex align-items-end justify-content-end'>
                        <button type='submit' className='btn btn-dark'>Calculate</button>
                    </div>
                </form>
            </div>
            <div className='card p-3 my-5'>
                <h2 className='text-center fw-bold'>Results</h2>
                <Alert heading={`Results : Rp ${hasil}`} type='info' icons='bi bi-info-circle-fill' />
            </div>
        </>
    )
}

export default FormCicilan