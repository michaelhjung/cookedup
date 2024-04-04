import Footer from "@/components/footer";
import Icon from "@/components/icon";
import Main from "@/components/main";

const Homepage = () => (
  <div className="h-screen max-h-screen flex flex-col justify-between items-center p-4 sm:p-12 md:p-18 lg:p-24">
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <span className="font-bold">cooked</span>
        <span>up</span>
        <Icon type="chefhat" />
      </h1>
      <p className="text-xs md:text-sm">Find recipes based on ingredients on hand!</p>
    </section>

    <Main />

    <Footer />
  </div>
);

export default Homepage;
