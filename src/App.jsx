
import './App.css'
import { SignUpForm } from './components/SignUpForm/SignUpForm'
import { SignInForm } from './components/SignInForm/SignInForm'
import { LogOut } from './components/LogOut/LogOut'
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
const HomePage=lazy(()=>import('../src/pages/HomePage/HomePage'));
const PsychologistsPage = lazy(()=>import('../src/pages/PsychologistsPage/PsychologistsPage'));
const FavoritesPage = lazy(()=>import('../src/pages/FavoritesPage/FavoritesPage'))

function App() {


  return (
    <>  
    <Layout>
    <Suspense fallback={<>...Loading</>}>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/psychologist' element={<PsychologistsPage/>}/>
      <Route path='/favorites' element={<FavoritesPage/>}/>
    </Routes>
    </Suspense>
    </Layout>
    
      
      {/* <SignUpForm/>
      <SignInForm/>
      <LogOut/> */}
    </>
  )
}

export default App
