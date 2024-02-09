import Logo from "../assets/LOGO.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className='flex justify-between p-6 bg-white uppercase font-black font-[Montserrat]'>
      <a href='/' className='w-[7dvh] my-auto'>
        <motion.img
          src={Logo.src}
          alt='bar'
          whileHover={{ scale: 1.1, rotate: 12 }}
          whileTap={{ scale: 0.9 }}
        />
      </a>
      <div className='md:text-2xl text-bmPink-500 flex gap-2 md:gap-8 my-auto'>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href='/blog'
        >
          Blog
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href='/catalogue'
        >
          Catalogue
        </motion.a>
      </div>
      <motion.div
        className='text-gray-300 cursor-not-allowed text-3xl my-auto'
        whileHover={{ scale: 1.1, rotate: 12 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className='fa-solid fa-shop'></i>
      </motion.div>
    </header>
  );
};

export default Header;
