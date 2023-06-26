import AboutUs from "../../pages/aboutus";
import Brand from "../../pages/brand";
import Banner from "../../pages/banner";
import Team from "../../pages/team";
import Services from "../../pages/services";
import Faq from "../../pages/faq";
import Footer from "../../pages/footer";
export default function Home() {
  return (
    <main>
        <Banner/>
        <Brand/>
        <AboutUs/>
        <Team/>
        <Services/>
        <Faq/>
        <Footer/>
    </main>
  )
}
