import BestSellerProduct from "./bestSellerProduct";

function BestSellerContainer(props) {
  return (
    <div className="container">
      <div className="col-md-8 bottom-grid-left">
        {props.products.map((product) => (
          <BestSellerProduct product={product} />
        ))}
      </div>

      <div className="clearfix"> </div>
    </div>
  );
}
export default BestSellerContainer;
