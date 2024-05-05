import BestSellingProducts from "./components/BestSellingProducts/BestSellingProducts";
import BrowseCategory from "./components/BrowseCategory/BrowseCategory";
import FlashSales from "./components/FlashSales/FlashSales";
import HeroSection from "./components/HeroSection/HeroSection";
import NewArrival from "./components/NewArrival/NewArrival";
import OurProducts from "./components/OurProducts/OurProducts";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FlashSales />
      <BrowseCategory />
      <BestSellingProducts />
      <OurProducts />
      <NewArrival />
      <Services />
    </>
  );
}
