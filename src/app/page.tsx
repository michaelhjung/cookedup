import Footer from "@components/Footer";
import Header from "@components/Header";
import SearchAndRecipes from "@components/SearchAndRecipes";

const Homepage = () => (
  <div
    className={`
      flex h-screen flex-col
      overflow-hidden
      p-4 md:p-6 lg:p-8
      pl-0 md:pl-0 lg:pl-0
    `}
  >
    <Header />

    <main className="mt-4 flex flex-col grow overflow-hidden lg:flex-row lg:justify-between">
      <SearchAndRecipes />
    </main>

    <Footer />
  </div>
);

export default Homepage;
