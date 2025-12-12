import Header from "../components/header";
import Footer from "../components/footer";
import Explore from "./Explore";

export default function Home() {
  return (
    <div className="sf_medium">
      <Header />

      <div>
        <div className="md:w-[70%]">
          <Explore />
        </div>
      </div>

      <Footer />
    </div>
  );
}
