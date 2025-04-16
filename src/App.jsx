
import './App.css'
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
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
    
    </>
  )
}

export default App
