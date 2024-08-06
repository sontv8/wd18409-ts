import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface IProduct{
  name:string
}
interface IProductProps{
  onHandleSubmit: (data:IProduct) => void
}
interface FormData{
  name:string
}

const AddProduct = (props:IProductProps) => {
    const {onHandleSubmit} = props
    
    const navigate = useNavigate()
    const {register, handleSubmit, reset } = useForm<FormData>()
    const onAdd = (data:IProduct) => {
        onHandleSubmit(data)
        navigate("/admin/product")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onAdd)}>
            <input type="text" placeholder='Enter Product Name' {...register("name")}/>
            <button type="submit">Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct