import "./Category.scss";
import Products from "../Products/Products";
const Category =() => {
    return (
        <div className="category-main">
            <div className="layout">
                <div className="title">
                    Category Title
                </div>
                <Products innerPage={true}/>
            </div>
        </div>
    );
};

export default Category;