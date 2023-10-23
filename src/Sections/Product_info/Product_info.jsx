import "./Product_info.scss"
import Related from "../Product_info/Related_product/Related_product"
import prod_img from "../../images/product/mcb.png"
import { FaCartPlus } from 'react-icons/fa';

const Product_info =() => {
    return (
        <div className="product-info-main">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod_img} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">Product Name</span>
                        <span className="price">Product Price</span>
                        <span className="details">Product Details</span>

                        <div className="cart-button">
                            <div className="quantity-button">
                                <span>+</span>
                                <span>44</span>
                                <span>-</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20}/>
                                ADD TO CART
                            </button>
                        </div>

                        <span className="split"/>
                        
                        <div className="info">

                        </div>
                    </div>
                </div>
                <Related/>
            </div>
        </div>
    );
};

export default Product_info;