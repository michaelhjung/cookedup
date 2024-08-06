import Image from "next/image";
import chefBulb from "@public/imgs/chef-bulb.png";
import AuthButton from "@/components/auth-button";

const Heading = () => (
  <section className="flex flex-col items-center justify-center">
    <Image
      src={chefBulb}
      alt="chef lightbulb"
      className="w-8 md:w-12 xl:w-16"
    />
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      <span className="font-bold text-pastel-green">cooked</span>
      <span className="text-pastel-brown">up</span>
    </h1>

    <AuthButton />

    <p className="text-xs sm:text-sm md:text-base">
      Find recipes based on ingredients on hand!
    </p>
  </section>
);

export default Heading;
