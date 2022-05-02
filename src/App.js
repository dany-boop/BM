import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bmi from './pages/Bmi'
import Cicilan from './pages/Cicilan'
import Pajak from './pages/Pajak'
import KonversiBiner from './pages/KonversiBiner'
import KonversiOktal from './pages/KonversiOktal'
import KonversiDesimal from './pages/KonversiDesimal'
import KonversiHeksa from './pages/KonversiHeksa'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bmi' element={<Bmi />} />
        <Route path='/cicilan' element={<Cicilan />} />
        <Route path='/pajak' element={<Pajak />} />
        <Route path='/konversi/biner' element={<KonversiBiner />} />
        <Route path='/konversi/oktal' element={<KonversiOktal />} />
        <Route path='/konversi/desimal' element={<KonversiDesimal />} />
        <Route path='/konversi/heksadesimal' element={<KonversiHeksa />} />
      </Routes>
    </div>
  )
}

export default App