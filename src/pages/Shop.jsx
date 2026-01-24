import NewProducts from "../components/NewPro";
import PopularProduct from "../components/PopularProduct"
import StockProduct from "../components/StockProduct"
import Footer from "../components/Footer"
export default function Shop() {
  return(
    <div>
      <NewProducts/>
      <PopularProduct/>
      <StockProduct/>
      <Footer/>
    </div>
  );
}
