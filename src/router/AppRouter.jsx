import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { useCheckAuth } from '../hooks'
import { CheckingAuth } from '../ui'

export const AppRouter = () => {

  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  }
  return (
    <Routes>
      
      {
        //protegemos rutas privadas y publicas.
        (status === 'authenticated') 
        ? <Route path='/*' element={<JournalRoutes />} />
        : <Route path='/auth/*' element={<AuthRoutes />} />
      }
      <Route path='/*' element={ <Navigate to='/auth/login'/> } />

      {/* Login y registro */}
      {/* <Route path='/auth/*' element={<AuthRoutes />} /> */}
      {/* JournalApp */}
      {/* <Route path='/*' element={<JournalRoutes />} /> */}
    </Routes>
  )
}
