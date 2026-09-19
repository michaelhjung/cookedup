import Footer from "@components/Footer";
import Header from "@components/Header";
import SearchAndRecipes from "@components/SearchAndRecipes";

const Homepage = () => (
  <div
    className={`
      flex h-dvh flex-col
      overflow-hidden
      p-4 md:p-6 lg:p-8
    `}
  >
    <Header />

    {/* Pulled back to the viewport's left edge at lg so the search
        sidebar (and its fixed toggle) sit flush against it; the sidebar
        adds its own left clearance. */}
    <main
      id="main"
      className="flex flex-col grow overflow-hidden lg:-ml-8 lg:flex-row lg:justify-between"
    >
      <SearchAndRecipes />
    </main>

    <Footer />
  </div>
);

export default Homepage;
