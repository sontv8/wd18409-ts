const ProductManagement = (props:any) => {
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
                    {products.map((item:any,index:any) => {
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
        </div>
    )
}

export default ProductManagement