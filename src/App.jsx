import { useState } from 'react'
import './styles/admin.css'
import AdminLoginForm from './components/admin-login-form'
import AdminLoginHeader from './components/admin-info-header'
import Footer from './components/footer'


function App() {

  return (
    <>
      <AdminLoginHeader />
      <AdminLoginForm />
      <Footer />
    </>
  )
}

export default App
