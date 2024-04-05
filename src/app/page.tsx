import Heading from "@/components/heading";
import Footer from "@/components/footer";
import Main from "@/components/main";

const Homepage = () => (
  <div className="h-screen max-h-screen flex flex-col justify-between items-center p-4 sm:p-12 md:p-18 lg:p-24">
    <Heading />

    <Main />

    <Footer />
  </div>
);

export default Homepage;
