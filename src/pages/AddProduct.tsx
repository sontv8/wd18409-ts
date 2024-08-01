import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const AddProduct = (props) => {
    const {onHandleSubmit} = props
    
    const navigate = useNavigate()
    const {register, handleSubmit, reset } = useForm()
    const onAdd = (data) => {
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