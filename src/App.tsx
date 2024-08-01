import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useForm, SubmitHandler} from 'react-hook-form'
import './App.css'

function App() {
  const [products, setProduct] = useState([])
  useEffect(()=>{
    const getData = async()=>{
      const response = await fetch("http://localhost:3000/products")
      const data = await response.json()
      setProduct(data)
    }
    getData()
  },[])

  const onHandleRemove = (id) => {
    if(confirm("Ban co chac chan muon xoa khong?")){
      fetch(`http://localhost:3000/products/${id}`,{
        method: 'DELETE'
      })
      const newProductList = products.filter((item)=> item.id != id)
      setProduct(newProductList)
    }
  }

  const {register, handleSubmit, reset } = useForm()
  const onHandleSubmit = async(data) => {
    try {
      await fetch("http://localhost:3000/products",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
      })
      const newProductList = [...products, data]
      setProduct(newProductList)
      reset()
    } catch (error) {
      console.log(error);
      
    }
    
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" placeholder='Enter Product Name' {...register("name")}/>
        <button type="submit">Add Product</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Productn Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item,index)=>{
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => onHandleRemove(item.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
