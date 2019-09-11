const ProductIndexItem = ({product}) => {
    return(
        <div className="product-item">
            <Link to={`product/${product.id}`}>
                <div className="product-image-div">
                    <img src={window.supremeURL} className="product-image"/>
                </div>
                <div className="product-body-div">
                    <div className="product-title">{product.title}</div>
                    <div className="product-price">{product.retail_price}</div>
                </div>
            </Link>
        </div>
    )
}

export default ProductIndexItem;