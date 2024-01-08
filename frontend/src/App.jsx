import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import CreateBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';

import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook'
function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/books/create' element={<CreateBook></CreateBook>}/>
        <Route path='/books/details/:id' element={<ShowBook></ShowBook>}/>
        <Route path='/books/edit/:id' element={<EditBook/>}/>
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      </Routes>
    </>
  )
}

export default App
