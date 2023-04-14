import React from "react";
import Card from "react-bootstrap/Card";
import { Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productsCartSlice";
import { useNavigate } from "react-router-dom";

export const Product = ({ product, stock }) => {
  // const [products, setProducts] = useState([]);
  const imageOk = () => {
    if (
      typeof product.media[0] === "string" &&
      product.media[0].includes("https://")
    ) {
      return product.media[0];
    } else {
      return `${process.env.REACT_APP_API_URL}/img/${product.media[0]}`;
    }
  };
  const stateCart = useSelector((state) => state.productCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    const match = stateCart.some((product) => item.id === product.id);
    const itemStore = stateCart.find((product) => item.id === product.id);
    if (item.stock > 0 && !match) {
      stock(item);
      dispatch(addToCart(item));
    } else if (match && itemStore.stock > itemStore.quantity) {
      stock(item);
      dispatch(addToCart(item));
    } else {
      toast.error("No tenemos mas Stock disponible 😢", {
        position: "bottom-right",
        duration: 3000,
      });
    }
  };

  const handleBuy = (item) => {
    const match = stateCart.some((product) => item.id === product.id);
    const itemStore = stateCart.find((product) => item.id === product.id);
    if (item.stock > 0 && !match) {
      dispatch(addToCart(item));
      navigate("/cart");
    } else if (match && itemStore.stock > itemStore.quantity) {
      dispatch(addToCart(item));
      navigate("/cart");
    } else {
      toast.error("No tenemos mas Stock disponible 😢", {
        position: "bottom-right",
        duration: 3000,
      });
    }
  };
  return (
    <Card
      className="bg-black bg-opacity-25 m-4 rounded mb-5"
      style={{ width: "20rem", height: "40rem", borderRadius: "100px" }}
    >
      <Card.Body>
        <Link
          to={`/${product.category.slug}/${product.slug}`}
          key={product.id}
          state={product}
          className="hover-zoom"
        >
          <Card.Img
            variant="top"
            src={imageOk()}
            className="img-fluid object-fit-cover"
          />
        </Link>
      </Card.Body>
      <Card.Body className="d-flex justify-content-center align-items-end">
        <Card.Title className="text-light">
          <div>{product.name}</div>
        </Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush ">
        <ListGroup.Item
          className="d-flex justify-content-center fs-4 fw-bold"
          style={{ backgroundColor: "#cacaca" }}
        >
          $ {product.price}
        </ListGroup.Item>
        <ListGroup.Item
          style={{ height: "3.5rem", backgroundColor: "#cacaca" }}
          className="d-flex justify-content-center fs-4 fw-bold"
        >
          <Button
            variant={product.stock === 0 ? "danger" : "outline-primary"}
            className="mx-2 product-btn"
            onClick={() => handleBuy(product)}
            disabled={product.stock === 0}
          >
            Buy
          </Button>
          <Button
            variant={product.stock === 0 ? "danger" : "outline-success"}
            className="mx-2 product-btn"
            onClick={() => handleAddToCart(product)}
            disabled={product.stock === 0}
          >
            + <FaOpencart size={25} />
          </Button>
        </ListGroup.Item>
        {/*  <ListGroup.Item
          style={{ height: "2.5rem", backgroundColor: "#cacaca" }}
          className={`d-flex justify-content-center fw-bold ${
            product.stock === 0 ? "withinStock" : ""
          }`}
        >
          In stock: {product.stock}
        </ListGroup.Item> */}
      </ListGroup>
    </Card>
  );
};
