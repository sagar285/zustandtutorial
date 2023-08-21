import React from 'react'
import Columns from './Columns'

const App = () => {
  return (
    <div className='App'>
      <Columns state="PLANNED"/>
      <Columns state="ONGOING"/>
      <Columns state="DONE"/>
    </div>
  )
}

export default App