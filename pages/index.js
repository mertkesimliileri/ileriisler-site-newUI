import Header from "@/layout/header"
import Banner from "@/layout/banner"
import Brands from "@/layout/brands"
import Solutions from "@/layout/solutions"
import Divider from "@/layout/divider"
import Carousel from "@/layout/carousel"
import JoinUs from "@/layout/joinUs"
import Divider2 from "@/layout/divider2"
import Footer from "@/layout/footer"

export default function Home() {
  return (
    <div>
       <Header navType={1} buttonType={2} />
       <Banner />
       <Brands />
       <Solutions />
       <Divider />
       <Carousel />
       <JoinUs />
       <Divider2 />
       <Footer hideColumns={false} />
    </div>
  )
}
