import { useEffect, useState } from 'react'
import Item from '../components/Item'
const Itemlist = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
      const producto = {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      }
      const promesa = new Promise((resolve,reject)=>{
        resolve(setTimeout(()=>{
            setProductos(producto)
        },2000))
      })
    }, [])
    const {title,description,thumbnail,price} = productos
  return (
    <>
     <Item 
        title={title}
        description={description}
        thumbnail={thumbnail}
        price={price}
     />
    </>
  )
}
export default Itemlist