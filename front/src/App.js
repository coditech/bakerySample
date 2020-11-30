import React from "react";
import Header from "./components/header";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./components/slider";
import Footer from "./components/footer";
import ProductDetail from "./components/productDetail";
import ProductCard from "./components/productCard";
import NewestProduct from "./components/newestProduct";
import BestSellerProduct from "./components/bestSellerProduct";
import ProductList from "./components/productList";
import BestSellerContainer from "./components/bestSellerContainer";
import NewestContainer from "./components/newestContainer";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";
import Products from "./pages/products";
import Home from "./pages/home";
import { Switch, Route, withRouter } from "react-router-dom";
import Dashboard from "./admin/dashboard";

import SecuredRoute from "./securedRoute";

class App extends React.Component {
  state = {
    token: "blah",
    products: [],
    /* products: [
      {
        product_id: 1,
        name: "Forest Cake",
        description:
          " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper suscipit lobortis nisl ut",
        price: 30,
        image: "images/11.jpg",
        is_best_seller: true,
        date_created: "12/11/2020",
        cat_id: 1,
        cat_name: "Cake",
      },
      {
        product_id: 2,
        name: "Birthday Cake",
        description:
          " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper suscipit lobortis nisl ut",
        price: 50,
        image: "images/12.jpg",
        is_best_seller: false,
        date_created: "10/11/2020",
        cat_id: 1,
        cat_name: "Cake",
      },
      {
        product_id: 3,
        name: "Blueberry Cake",
        description:
          " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper suscipit lobortis nisl ut",
        price: 35,
        image: "images/10.jpg",
        is_best_seller: false,
        date_created: "12/10/2020",
        cat_id: 1,
        cat_name: "Cake",
      },
      {
        product_id: 4,
        name: "Rainbow Cupcakes",
        description:
          " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper suscipit lobortis nisl ut",
        price: 40,
        image: "images/11.jpg",
        is_best_seller: true,
        date_created: "12/11/2020",
        cat_id: 2,
        cat_name: "Cupcakes",
      },
      {
        product_id: 5,
        name: "Chocolate Chip Cookies",
        description:
          " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper suscipit lobortis nisl ut",
        price: 65,
        image: "images/11.jpg",
        is_best_seller: true,
        date_created: "09/11/2020",
        cat_id: 3,
        cat_name: "Cookies",
      },
    ], */
  };
  async componentDidMount() {
    const response = await fetch("http://localhost:8000/products");
    const result = await response.json();
    console.log(result);
    this.setState({ products: result.products });
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} products={this.state.products} />
            )}
          />
          <Route
            path="/products"
            render={(props) => (
              <Products {...props} products={this.state.products} />
            )}
          />
          <Route
            path="/about"
            render={(props) => <AboutUs {...props} product_id="5" />}
          />
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/detail" component={ProductDetail} />
          <SecuredRoute
            path="/admin"
            component={Dashboard}
            token={this.state.token}
          />
          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default withRouter(App);
