const {
  default: BestSellerContainer,
} = require("../components/bestSellerContainer");
const { default: NewestContainer } = require("../components/newestContainer");
const { default: Slider } = require("../components/slider");

function Home(props) {
  return (
    <>
      <div class="container">
        <Slider />
        <div class="top-grids">
          <NewestContainer />
        </div>
        <div class="bottom-grids">
          <BestSellerContainer
            products={props.products.filter(
              (product) => product.is_best_seller == 1
            )}
          />
        </div>
      </div>
    </>
  );
}
export default Home;
