import "./Category.scss";
import img_cat from "../../../images/category/category_1.png"

const Category =() => {
    return (
        <div className="shop_category">
            <div className="categories">
                <div className="category">
                    <img src={img_cat} alt="" />
                    <span>Laptop</span>
                </div>
                <div className="category">
                    <img src={img_cat} alt="" />
                    <span>Mobile</span>
                </div>
                <div className="category">
                    <img src={img_cat} alt="" />
                    <span>Laptop</span>
                </div>
                <div className="category">
                    <img src={img_cat} alt="" />
                    <span>Laptop</span>
                </div>
                <div className="category">
                    <img src={img_cat} alt="" />
                    <span>Mobile</span>
                </div>
                <div className="category">
                    <img src={img_cat} alt="" />
                    <span>Laptop</span>
                </div>
                <div className="category">
                    <img src={img_cat} alt="" />
                    <span>Mobile</span>
                </div><div className="category">
                    <img src={img_cat} alt="" />
                    <span>Laptop</span>
                </div>

            </div>
        </div>
    );
};

export default Category;