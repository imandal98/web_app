import "./home.scss";
import Banner from "../Banner/Banner";
import Categogy from "./Category/Category";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="home">
      <div className="main_containt">
        <div className="layout">
          <Categogy />
          <Products headingText="Best products" />
        </div>
      </div>
      {/* <Banner/>  */}
    </div>
  );
};

export default Home;
