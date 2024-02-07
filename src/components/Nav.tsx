import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className='flex justify-between p-2 md:p-4 bg-white uppercase font-black font-[Montserrat] h-[10dvh]'>
      <a href='/' className='w-[12dvh] my-auto'>
        <motion.img
          src='../assets/BAR.png'
          alt='bar'
          whileHover={{ scale: 1.1, rotate: 12 }}
          whileTap={{ scale: 0.9 }}
        />
      </a>
      <div className='md:text-2xl text-bmPink1 flex gap-2 md:gap-8 my-auto'>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href='/catalogue'
        >
          Catalogue
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href='/mission'
        >
          Mission
        </motion.a>
      </div>
      <motion.div
        className='text-bmBlue1 text-3xl my-auto cursor-pointer'
        whileHover={{ scale: 1.1, rotate: 12 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className='fa-solid fa-question-mark'></i>
      </motion.div>
    </header>
  );
};

export default Header;
