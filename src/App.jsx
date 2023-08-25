// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UsersPanel } from './components/UsersPanel/UsersPanel'
import { LeftBar } from './components/LeftBar/LeftBar.jsx'
import { ProductsPanel } from './components/ProductsPanel/ProductsPanel'

function App() {

  return (
    <BrowserRouter>
        <LeftBar />
      <Routes>
        <Route path='/' element={<UsersPanel />} />
        <Route path="/UsersPanel" element={<UsersPanel />} />
        <Route path="/ProductsPanel" element={<ProductsPanel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
