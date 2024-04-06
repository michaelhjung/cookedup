import Heading from "@/components/heading";
import Footer from "@/components/footer";
import Main from "@/components/main";

const Homepage = () => (
  <div className="h-screen max-h-screen flex flex-col justify-between items-center p-2 sm:p-4 md:p-6 lg:p-8">
    <Heading />

    <Main />

    <Footer />
  </div>
);

export default Homepage;
