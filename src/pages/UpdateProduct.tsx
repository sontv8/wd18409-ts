import { useEffect } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

interface IProduct{
    id:string, 
    name:string
}
interface IProductProps {
    products: IProduct[],
    onHandleUpdate: (data:IProduct) => void
}

interface FormData{
    name:string
}

const UpdateProduct = (props: IProductProps) => {
    const {onHandleUpdate, products} = props
    
    const {id} = useParams<{id:string}>();
    
    const navigate = useNavigate()
    const {register, handleSubmit, reset } = useForm<FormData>()

    useEffect(()=>{
        const currentProduct = products.find((item) => item.id == id)
        reset(currentProduct);
    },[])

    const onUpdate: SubmitHandler<FormData> = (data) => {
        if(id){
            onHandleUpdate({id, ...data})
            navigate("/admin/product")
        }
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