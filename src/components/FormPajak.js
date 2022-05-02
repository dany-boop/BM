import React, { useState } from 'react'

import TextInput from './TextInput'
import Alert from './Alert'

function FormPajak() {
    const [nominal, setNominal] = useState(0)
    const [ppn, setPpn] = useState(0)
    const [diskon, setDiskon] = useState(0)
    const [total, setTotal] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        const formValid = nominal > 0 && ppn > 0 && diskon > 0
        if (!formValid) {
            return
        }
        const total = nominal - (nominal * (ppn / 100)) - (nominal * (diskon / 100))
        setTotal(total)
    }

    return (
        <>
            <div className='card p-3'>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='text-center fw-bold'>Tax Calculator</h2>
                </div>
                <form onSubmit={calculate}>
                    <div className='form-group mb-3'>
                        <TextInput label='Nominal (ex: 500000)' type='number' onChange={(e) => setNominal(e.target.value)} value={nominal} id='nominal' placeholder='Please input nominal' />
                    </div>
                    <div className='form-group mb-3'>
                        <TextInput label='VAT(Value Added Tax/PPN) (ex: 10)' type='number' onChange={(e) => setPpn(e.target.value)} value={ppn} id='tax' margin='me-3' min='10' extra='%' placeholder='Please input nominal' />
                    </div>
                    <div className='form-group mb-3'>
                        <TextInput label='Discount (ex: 25)' type='number' onChange={(e) => setDiskon(e.target.value)} value={diskon} id='discount' margin='me-3' extra='%' placeholder='Please input nominal' />
                    </div>
                    <hr />
                    <div className='d-flex align-items-end justify-content-end'>
                        <button type='submit' className='btn btn-dark'>Calculate Tax</button>
                    </div>
                </form>
            </div>
            <div className='card p-3 my-5'>
                <h2 className='text-center fw-bold'>Results</h2>
                <Alert heading={`Results : Rp ${total}`} type='info' icons='bi bi-info-circle-fill' />
            </div>
        </>
    )
}

export default FormPajak