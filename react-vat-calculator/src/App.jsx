import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const[price, setPrice]=useState(0);
  const[discount, setDiscount]=useState(0);
  const [vat, setVAT]=useState(0);
  const handler=(e)=>{
    const price=e.target.value;
    console.log(price);
    setPrice(price);
    let v=price*0.07;
    setVAT(Math.round(v*100)/100)
  }
  const handlerDiscount=(e)=>{
    const discount=e.target.value;
    
    setDiscount(discount);
    let v=(price-discount)*0.07;
    setVAT(Math.round(v*100)/100)
  }

  return (
    <>
      <label>Price</label>
      <input type="number" value={price} onChange={handler} />
      <label>Discount</label>
      <input type="number" value={discount} onChange={handlerDiscount} />
        <p>Gross Price: {price-discount}</p>
        <p>VAT: {vat}</p>

    
        
    
      
    </>
  )
}

export default App
