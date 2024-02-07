import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='h-[90dvh] hero flex flex-col text-center'>
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 500,
        }}
        className='mx-auto my-auto'
      >
        <h1 className='text-bmPink1 font-black text-6xl md:text-9xl font-[Montserrat]'>
          {"BarMates".split("").map((letter, index) => {
            return (
              <span
                className='hover:text-bmBlue1 duration-300 ease-in-out'
                key={index}
              >
                {letter}
              </span>
            );
          })}
        </h1>
        <p className='text-bmBlue1 font-bold text-base md:text-3xl'>
          Innovative bars made in Switzerland
        </p>
      </motion.div>
      <motion.a
        whileTap={{ scale: 0.8 }}
        href='#about'
        className='text-bmBlue1 mb-8 group mx-auto'
      >
        <p className='md:text-xl font-bold duration-200'>Find out more!</p>
        <i className='fa-solid fa-chevron-down text-2xl md:text-4xl group-hover:translate-y-2 duration-200 ease-in-out'></i>
      </motion.a>
    </div>
  );
};

export default Hero;
