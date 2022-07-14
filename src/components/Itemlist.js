import { useEffect, useState } from 'react'
import Item from '../components/Item'
const Itemlist = () => {

  

  const [producto, setProducto] = useState([])

  const product = [{
    id: 1,
    title:"Iphone 9",
    price: 520,
    pictureUrl: "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
  },
  {
    id: 2,
    title:"Iphone X",
    price: 899,
    pictureUrl: "https://dummyjson.com/image/i/products/2/thumbnail.jpg"
  },
  {
    id: 3,
    title:"Samsung Universe 9",
    price: 1300,
    pictureUrl: "https://dummyjson.com/image/i/products/3/thumbnail.jpg"
  }]

  useEffect(() => {
      const promesa = ()=>{
        return new Promise((resolve,reject)=>{
          setTimeout(() => {
            resolve(product)
          }, 2000);//Retraso
        })
      }
      //Acá llamo a la promesa y se resuelve enviando asi el product al useState
      promesa().then(elemento=>{
        setProducto(elemento)
      })
  }, [])
  
  return (
    <>
      <Item products={producto}/>
    </>
  )
}
export default Itemlist