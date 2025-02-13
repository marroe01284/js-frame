import { useState } from 'react'
import './App.css'
import { Layout } from './layout/index.jsx'
import { Card } from './components/card.jsx'
// create a header component



function App() {

  return (
    <>
      <h1 className='text-blue-400 text-3xl'>Home path!</h1>
      <p>some content</p>
     <Card bgColor={"red"} title={"First Card!"}>
     <p>content for the card</p>
     </Card>
     
    </>

  );
}

export default App
