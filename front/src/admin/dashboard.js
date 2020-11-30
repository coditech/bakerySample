import React, { Component } from "react";
import ProductsTable from "./productsTable";

export default class Dashboard extends Component {
  render() {
    return (
      <div class="biseller-info">
        <div className="section group">
          <div
            className="contact-form"
            style={{ width: "80%", margin: "30px" }}
          >
            <h3>Add Product</h3>
            <form method="post" action="contact-post.html">
              <div>
                <span>
                  <label>CATEGORY</label>
                </span>
                <span>
                  <select name="category" id="category">
                    <option value="cake">Cakes</option>
                    <option value="cookie">Cookies</option>
                    <option value="cupcake">Cupcakes</option>
                  </select>
                </span>
              </div>
              <div>
                <span>
                  <label>TITLE</label>
                </span>
                <span>
                  <input name="title" type="text" className="textbox" />
                </span>
              </div>
              <div>
                <span>
                  <label>PRICE</label>
                </span>
                <span>
                  <input name="price" type="text" className="textbox" />
                </span>
              </div>
              <div>
                <span>
                  <label>IMAGE</label>
                </span>
                <span>
                  <input name="image" type="file" className="textbox" />
                </span>
              </div>
              <div>
                <span>
                  <label>DESCRIPTION</label>
                </span>
                <span>
                  <textarea name="description"> </textarea>
                </span>
              </div>
              <div>
                <span>
                  <label>FEATURED</label>
                </span>
                <span>
                  <input name="featured" type="checkbox" className="textbox" />
                </span>
              </div>
              <div>
                <span>
                  <input type="submit" value="Create" />
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="container">
          <h2>Products</h2>
          <ProductsTable />
        </div>
      </div>
    );
  }
}
