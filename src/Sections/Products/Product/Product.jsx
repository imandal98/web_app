import "./Product.scss";
import img from "../../../images/product/mcb.png";
const Product = () => {
  return (
    <div className="product-card">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <span className="Name">Title</span>
        <span className="Price">&#8377;1099</span>
      </div>
    </div>
  );
};

export default Product;
