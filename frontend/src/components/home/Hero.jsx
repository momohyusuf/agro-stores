import { Link } from "react-router";

const Hero = () => {
  return (
    <div className=" max-w-[1000px] mx-auto py-24 text-center px-4">
      <h1 className="text-3xl lg:text-7xl text-green-800 capitalize mb-4">
        Fresh Produce directly from the farm 24hr/7d
      </h1>
      <p className="max-w-[600px] mx-auto font-light text-lg text-gray-500 mb-4">
        Bringing you the freshest harvest, handpicked directly from local farms
        and delivered to your doorstep 24/7. Taste the difference in every bite
      </p>

      <Link to={"/marketplace"}>
        <button className="bg-green-500 px-10 py-2 animate-pulse font-semibold text-lg text-white rounded-md">
          Start Shopping
        </button>
      </Link>

      <img
        className="w-[500px] mx-auto"
        src="/hero.png"
        alt="Farm market illustration"
      />
    </div>
  );
};

export default Hero;
