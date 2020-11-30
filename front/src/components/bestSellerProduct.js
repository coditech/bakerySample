function BestSellerProduct(props) {
  return (
    <div className="col-md-3 bottom-grid-left-grid text-center">
      <img src={props.product.image} title="name" />
      <h4>{props.product.name}</h4>
      <p>$ {props.product.price}</p>
    </div>
  );
}
export default BestSellerProduct;
