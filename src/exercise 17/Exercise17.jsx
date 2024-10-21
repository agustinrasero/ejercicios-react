import React,{useEffect, useState} from 'react'
/*

  Ejercicio 22: Conversor de Monedas
  Crea una aplicación que convierta entre diferentes monedas usando una API de conversión de monedas.

  Requisitos:

  -Un estado para almacenar la cantidad y la moneda seleccionada.
  -Un input para ingresar la cantidad.
  -Un menú desplegable para seleccionar la moneda de origen y la moneda de destino.
  -Usa useEffect para hacer la solicitud a la API y obtener la tasa de conversión.
  -Muestra el resultado de la conversión.


*/
const Exercise17 = () => {
  const [cantidad, setCantidad] = useState(0)
  const [moneda, setMoneda] = useState('USD')
  const [moneda2, setMoneda2] = useState('USD')
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    const api = `https://api.exchangerate-api.com/v4/latest/${moneda}`
    fetch(api)
    .then(response => response.json())
    .then(data => { setTotal(data.rates[moneda2] * cantidad)})
  },[moneda,moneda2,cantidad])


  return (
    <div>
      <input id='b' type='number' onChange={(e)=>setCantidad(e.target.value)}></input>

      <select onChange={(e)=>setMoneda(e.target.value)}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='JPY'>JPY</option>
      </select>

      <input id='a' type='number' readOnly value={total}></input>

      <select onChange={(e)=>setMoneda2(e.target.value)}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='JPY'>JPY</option>
      </select>
    </div>
  )
}

export default Exercise17
