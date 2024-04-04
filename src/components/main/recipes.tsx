import Icon from "@/components/icon";

const Recipes = ({ recipesData = [] }) => (
  <section className="h-full flex flex-col items-center lg:w-2/3">
    <Icon type="fork-and-spoon" className="text-2xl sm:text-5xl mb-4" />

    {recipesData.length ? (
      <>
        <p className="text-sm sm:text-base mb-4">Discover recipes below!</p>

        {recipesData.map((recipe, index) => (
          <div key={index}>{recipe}</div>
        ))}
      </>
    ) : (
      <p className="text-sm sm:text-base">Select ingredients to find recipes!</p>
    )}
  </section>
);

export default Recipes;
