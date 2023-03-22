import NavBar from "../partials/Navbar";
import ProductList from "../partials/ProductList";

function home() {
  return (
    <div>
      <NavBar />
      <h1>Estas en Home</h1>
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
}

export default home;
