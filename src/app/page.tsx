import Shortcuts from "@/components/shortcuts";
import HotDeals from "@/components/hot-deals";
import Footer from "@/components/footer";
import { MainNav } from "@/components/nav-bar";
import { ProductsCarousel } from "@/components/products-carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <MainNav />
      <ProductsCarousel />
      <div className="w-full lg:w-[55%]">
        <Shortcuts />
        <HotDeals
          label="HOT DEAL"
          description="[UP TO 34% OFF] HAPPY HOUR"
          single
        />
        <ProductsCarousel />
        <HotDeals label="NEW IN" description="#주목할만한신상품" />
        <HotDeals
          label="벤하임 신규입점 EVENT"
          description="최저가 보장, 5% 다운로드 쿠폰"
        />
        <HotDeals
          label="로지텍 AS보장 정품 마우스/키보드 단독"
          description="#병행수입 아닌 정품 제품으로 확실한 AS보장!"
        />
      </div>
      <Footer />
    </main>
  );
}
