import Header from "@/layout/header";
import Banner from "@/layout/banner";
import Brands from "@/layout/brands";
import Solutions from "@/layout/solutions";
import Divider from "@/layout/divider";
import Carousel from "@/layout/carousel";
import JoinUs from "@/layout/joinUs";
import Divider2 from "@/layout/divider2";
import Footer from "@/layout/footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>IleriIsler</title>
        <meta
          name="description"
          content="Step into the future with our cutting-edge software projects. Experience innovation like never before as we redefine possibilities, integrating AI and advanced tech to propel your business forward. Embrace tomorrow, today!"
        />
      </Head>
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
  );
}
