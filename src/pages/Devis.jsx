import React from 'react'
import DevisForm from '../components/DevisForm'
import Helmet from '../components/Helmet'

const Devis = () => {
  return (
    <>
    <Helmet  title= "Devis" subTitle={ "Formulaire de devis" }/>
    <DevisForm />
    </>
  )
}

export default Devis