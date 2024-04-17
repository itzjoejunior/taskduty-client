import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import RootLayout from './layout/RootLayout'
import { Tasks } from './pages/alltask/Tasks'
import NewTask from './pages/newtask/NewTask'
import EditTask from './pages/edittask/EditTask'
import SignIn from './auth/SignIn'
import SingUp from './auth/SingUp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/alltask' element={<Tasks/>}/>
        <Route path='/newtask' element={<NewTask/>}/>
        <Route path='/edittask' element={<EditTask/>}/>
        </Route>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SingUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

// npm i react-router-dom