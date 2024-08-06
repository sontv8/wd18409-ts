import {Link} from "react-router-dom"

interface IProduct{
    id:string,
    name:string
}
interface IProductProps{
    products:IProduct[],
    onHandleRemove: (id:string) => void
}

const ProductManagement = (props:IProductProps) => {
    // console.log(props.onHandleRemove);
    
    const {products, onHandleRemove} = props
    
    return (
        <div>
            <h1>Product Management Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Product Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item,index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>
                                    <button onClick={() => onHandleRemove(item.id)}>Delete</button>
                                    <Link to={`/admin/product/update/${item.id}`}><button>Update</button></Link>
                                    
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManagement