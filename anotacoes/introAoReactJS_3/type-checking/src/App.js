import React from 'react'
import PetShop from './PetShop'

function App () {
  const handleClick = () => {
    console.log('Iniciando o banho...')
  }
  
  return (
    <PetShop
      dogs={2}
      customerName="Matheus Prates"
      onClick={handleClick}
      status="done"
    />
  )
}

export default App