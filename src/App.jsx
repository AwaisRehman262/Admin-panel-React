// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './components/Homepage/Homepage'
import { UsersPanel } from './components/UsersPanel/UsersPanel'
import { ProductsPanel } from './components/ProductsPanel/ProductsPanel'
import { LeftBar } from './components/LeftBar/LeftBar.jsx'

function App() {

  return (
    <BrowserRouter>
        <LeftBar />
      <Routes>
        <Route path='/' component={<Homepage />} />
        <Route path='/Homepage' component={<Homepage />} />
        <Route path="/UsersPanel" element={<UsersPanel />} />
        <Route path="/ProductsPanel" element={<ProductsPanel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
