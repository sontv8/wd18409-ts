import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useForm, SubmitHandler} from 'react-hook-form'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProductManagement from './pages/ProductManagement'
import AddProduct from './pages/AddProduct'

function App() {
  // const [products, setProduct] = useState([])
  // useEffect(()=>{
  //   const getData = async()=>{
  //     const response = await fetch("http://localhost:3000/products")
  //     const data = await response.json()
  //     setProduct(data)
  //   }
  //   getData()
  // },[])

  

  // const {register, handleSubmit, reset } = useForm()
  // const onHandleSubmit = async(data) => {
  //   try {
  //     await fetch("http://localhost:3000/products",{
  //       method: "POST",
  //       headers:{
  //         "Content-Type":"application/json"
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     const newProductList = [...products, data]
  //     setProduct(newProductList)
  //     reset()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const [products,setProducts] = useState([])
  
  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => setProducts(data))
    }
    getData()
  },[])

  const onHandleRemove = (id:any) => {
    if(confirm("Ban co chac chan muon xoa khong?")){
      fetch(`http://localhost:3000/products/${id}`,{
        method: 'DELETE'
      })
      const newProductList = products.filter((item)=> item.id != id)
      setProducts(newProductList)
    }
  }

  return (
    <>
      <Routes>
        <Route path='/admin' element={<Dashboard/>}/>
        <Route path='/admin/product' element={<ProductManagement products={products} onHandleRemove={onHandleRemove}/>}/>
        <Route path='/admin/product/add' element={<AddProduct/>}/>
      </Routes>
    </>
  )
}

export default App
