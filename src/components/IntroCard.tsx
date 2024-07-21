import Image from "next/image";

const IntroCard = () => {
  return (
    <div className="w-full bg-blue-600 px-7 pt-7 rounded-md flex">
      <div className="flex flex-col flex-grow">
        <time className="text-xs text-white font-light lg:text-lg">
          September, 1 2021
        </time>
        <div className="hidden sm:block text-white mt-6 lg:mt-20">
          <h3 className="font-bold text-lg lg:text-3xl">Welcome back, John</h3>
          <p className="text-xs font-light lg:text-base">
            Always stay updated in student portal
          </p>
        </div>
      </div>
      <Image
        src={"/assets/images/welcome.png"}
        alt="Decoration"
        width={0}
        height={0}
        className="h-24 sm:h-32 md:h-40 lg:h-56 w-auto"
        unoptimized
      />
    </div>
  );
};

export default IntroCard;
