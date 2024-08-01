const ProductManagement = (props:any) => {
    const {products} = props
    console.log(products);
    
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
                    
                </tbody>
            </table>
        </div>
    )
}

export default ProductManagement