import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProductManagement from './pages/ProductManagement'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'

function App() {

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

  
  const onHandleSubmit = (data) => {
    fetch("http://localhost:3000/products",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
  }

  const onHandleUpdate = (data) => {
    fetch(`http://localhost:3000/products/${data.id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    
    const newProductList = products.map((item)=> item.id == data.id ? data : item)
    setProducts(newProductList)
    
  }

  return (
    <>
      <Routes>
        <Route path='/admin' element={<Dashboard/>}/>
        <Route path='/admin/product' element={<ProductManagement products={products} onHandleRemove={onHandleRemove}/>}/>
        <Route path='/admin/product/add' element={<AddProduct onHandleSubmit={onHandleSubmit}/>}/>
        <Route path='/admin/product/update/:id' element={<UpdateProduct onHandleUpdate={onHandleUpdate} products={products}/>}/>
      </Routes>
    </>
  )
}

export default App
