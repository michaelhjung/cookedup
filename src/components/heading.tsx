import Icon from "@/components/icon";

const Heading = () => (
  <section className="flex flex-col justify-center items-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      <span className="font-bold text-pastel-green">cooked</span>
      <span className="text-pastel-brown">up</span>
      <Icon type="chefhat" />
    </h1>
    <p className="text-xs sm:text-sm md:text-base">Find recipes based on ingredients on hand!</p>
  </section>
);

export default Heading;
