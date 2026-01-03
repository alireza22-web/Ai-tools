import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CategoryItem } from './pages/CategoryItem'
import { useEffect } from 'react'
import ScrollToTop from './Tools/ScrollTop'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'


function App() {
 

  return (
    <>
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:slug' element={<CategoryItem />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
