import Slide from "../components/Slide"
import Features from "../components/Feature";
import NewPro from "../components/NewPro";
import CategoriesSection from "../components/CategorySection";
import StockProduct from "../components/StockProduct";
import PopularProducts from "../components/PopularProduct";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
        <Slide/>
        <Features/>
        <NewPro/>
        <CategoriesSection/>
        <PopularProducts/>
        <StockProduct/>
        <Footer/>
    </div>
  );
}
