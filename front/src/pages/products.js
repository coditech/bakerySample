import ProductList from "../components/productList";

function Products(props) {
  return (
    <div class="biseller-info">
      <div class="container">
        <h2>Products</h2>
        <ProductList
          products={props.products.filter((product) => product.cat_id == 1)}
          catName="CAKES"
        />
        <ProductList
          products={props.products.filter((product) => product.cat_id == 2)}
          catName="CUPCAKES"
        />
        <ProductList
          products={props.products.filter((product) => product.cat_id == 3)}
          catName="COOKIES"
        />
      </div>
    </div>
  );
}
export default Products;
