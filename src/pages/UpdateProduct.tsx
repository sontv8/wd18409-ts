import { useEffect } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = (props) => {
    const {onHandleUpdate, products} = props
    
    const {id} = useParams();
    
    const navigate = useNavigate()
    const {register, handleSubmit, reset } = useForm()

    useEffect(()=>{
        const currentProduct = products.find((item) => item.id == id)
        reset(currentProduct);
    },[])

    const onUpdate = (data) => {
        onHandleUpdate({id, ...data})
        navigate("/admin/product")
    }
  return (
    <div>
        <h1>Update Product</h1>

        <form action="" onSubmit={handleSubmit(onUpdate)}>
            <input type="text" placeholder='Enter Product Name' {...register("name")}/>
            <button type="submit">Add Product</button>
        </form>
    </div>
  )
}

export default UpdateProduct