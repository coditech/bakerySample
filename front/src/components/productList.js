import ProductCard from "./productCard";

function ProductList(props) {
  return (
    <>
      <h3 class="new-models">{props.catName}</h3>
      <ul
        id="flexiselDemo3"
        style={{ display: "flex", listStyleType: "none", flexWrap: "wrap" }}
      >
        {props.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </ul>
    </>
  );
}
export default ProductList;
