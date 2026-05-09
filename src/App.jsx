import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/header'
import Hero from './components/Hero'
import OpeningHours from './components/OpeningHours'
import MenuList from './components/menuList'
import AllergenGrid from './components/AllergenGrid'
import LocalSection from './components/LocalSection'
import ManagerDashboard from './pages/ManagerDashboard'
import Footer from './components/Footer'


function HomePage({ lang, changeLang }) {
  const [selectedAllergen, setSelectedAllergen] = useState(null)
  



  return (
    <main className="main-content">
      <Hero lang={lang} />
      <OpeningHours lang={lang} changeLang={changeLang} />
      <MenuList
        selectedAllergen={selectedAllergen}
        onSelectAllergen={setSelectedAllergen}
        lang={lang}
        changeLang={changeLang}
      />
      <AllergenGrid
        selectedAllergen={selectedAllergen}
        onSelectAllergen={setSelectedAllergen}
        lang={lang}
        changeLang={changeLang}
      />
    </main>
  )
}

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'es')

const changeLang = (newLang) => {
  setLang(newLang)
  localStorage.setItem('lang', newLang)
}
  return (
    <div className="app">
      <Header lang={lang} changeLang={changeLang}   />

      <Routes>
        <Route path="/" element={<HomePage lang={lang} changeLang={changeLang} />} />
        <Route path="/locale" element={<LocalSection lang={lang} changeLang={changeLang} />} />
        <Route path="/manager" element={<ManagerDashboard />} />
      </Routes>
      <footer lang={lang} />
    </div>
  )
}

export default App