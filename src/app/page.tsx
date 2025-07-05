import Footer from "@components/Footer";
import Heading from "@components/Heading";
import Main from "@components/main";

const Homepage = () => (
  <div className="flex h-screen max-h-screen flex-col items-center justify-between p-2 sm:p-4 md:p-6 lg:p-8">
    <Heading />

    <Main />

    <Footer />
  </div>
);

export default Homepage;
