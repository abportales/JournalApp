import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { FirebaseAuth } from '../firebase/config'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui'
import { useDispatch } from 'react-redux'
import { login, logout } from '../store/auth'

export const AppRouter = () => {

  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  //un efecto que verifique si esta en checking
  useEffect(() => {
    //un obsersable, 
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if(!user) return dispatch( logout() );

      const {uid, email, displayName, photoURL} = user;
      dispatch(login({uid, email, displayName, photoURL})) //esta es nuestra función para hacer login.
    })

  }, [])

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
