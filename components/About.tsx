import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-2 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src="https://noormohmmad.com/static/media/Noor_1.b07195c1451c29e845c7.jpg"
        className="flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-72 md:h-96 xl:w-[400px] xl:h-[400px]"
      ></motion.img>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base text-justify">
          Lorem ipsum dolor sit amet consectetur, 🌟 adipisicing elit. Impedit
          maxime hic repellendus modi atque obcaecati similique sint illo
          exercitationem doloremque voluptas explicabo minus omnis ipsa, nobis
          minima libero, placeat possimus 🖥️ fugiat voluptate soluta. Magni
          velit ipsam accusantium nemo provident deleniti expedita pariatur eum,
          quibusdam soluta dolorum quod? Tempore veritatis similique illo magni
          architecto quos repudiandae 🤫 quod nihil voluptatibus. Perferendis,
          magni! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          dignissimos porro adipisci ab explicabo officia provident ut
          recusandae 💖 alias hic.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
