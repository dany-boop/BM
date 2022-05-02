import React from 'react'

const TextInput = ({ label, type, id, placeholder, min, extra, margin, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <div className='d-flex align-items-center'>
                <input type={type} value={value} onChange={onChange} className={`form-control ${margin}`} id={id} placeholder={placeholder} required min={min} />
                <span>{extra}</span>
            </div>
        </div>
    )
}

export default TextInput