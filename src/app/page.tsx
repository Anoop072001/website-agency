"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showContent ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black font-[family-name:var(--font-geist-sans)]"
    >
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-[32px] items-center overflow-hidden">
          {/* Hero Section */}
          <AnimatedSection animationType="fadeIn" duration={1.2} className="w-4/5 mx-auto mb-8">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/landing.png"
                  alt="Hero"
                  width={1200}
                  height={500}
                  className="rounded-xl object-cover shadow-2xl"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-start text-start text-2xl sm:text-3xl font-semibold text-gray-100 mt-10 max-w-2xl"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                >
                  We are Kodabyte, we deliver high-performance digital solutions with a strong focus on security and an unwavering commitment to quality, ensuring robust, future-ready products through innovation.
                </motion.span>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Our Services Section */}
          <AnimatedSection animationType="slideUp" delay={0.2} className="w-4/5 mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="text-lg text-gray-200">↳</span>
              <h2 className="text-lg font-semibold text-gray-100">Our Services</h2>
            </motion.div>
            
            <ul className="divide-y divide-gray-700">
              {[
                {
                  img: "/assets/web.png",
                  title: "Web & Mobile Design",
                },
                {
                  img: "/assets/brand.png",
                  title: "Brand Identity",
                },
                {
                  img: "/assets/app.png",
                  title: "App Development",
                },
                {
                  img: "/assets/consultancy.png",
                  title: "Consultancy",
                },
                {
                  img: "/assets/packaging.png",
                  title: "Packaging",
                },
              ].map((service, index) => (
                <motion.li
                  key={service.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                                  transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1
                }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex items-center py-6 cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={80}
                      height={40}
                      className="rounded-full object-cover mr-8"
                    />
                  </motion.div>
                  <motion.span 
                    className="flex-1 text-white text-2xl font-semibold group-hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.span>
                  <motion.span 
                    className="text-3xl text-gray-400 font-light group-hover:text-cyan-400 transition-colors"
                    whileHover={{ rotate: 90, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    +
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>
          
          {/* Recent Work Section */}
          <AnimatedSection animationType="slideUp" delay={0.3} className="w-4/5 mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="text-lg text-gray-200">↳</span>
              <h2 className="text-lg font-semibold text-gray-100">Recent Work</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  img: "/assets/galaxia.png",
                  title: "Galaxia Branding",
                },
                {
                  img: "/assets/john.png",
                  title: "John Mayer NYC",
                },
                {
                  img: "/assets/nazyak.png",
                  title: "Nayzak Patterns",
                },
                {
                  img: "/assets/crave.png",
                  title: "Crave Chips",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotateY: 5, rotateX: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 shadow-2xl"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={500}
                        height={200}
                        className="w-full h-80 object-cover"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                    >
                      <motion.h3
                        whileHover={{ x: 5 }}
                        className="text-white text-xl font-semibold"
                      >
                        {project.title}
                      </motion.h3>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center w-full"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full flex items-center justify-center gap-2 cursor-pointer border border-gray-600 rounded-full px-6 py-4 text-white font-semibold transition-all hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                View all work
                <motion.span
                  animate={{ rotate: [0, 45, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xl text-gray-400"
                >
                  ↗
                </motion.span>
              </motion.button>
            </motion.div>
          </AnimatedSection>
          
                     {/* Our Team Section */}
           <AnimatedSection animationType="slideUp" delay={0.4} className="w-4/5 mx-auto mt-16">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="flex items-center gap-2 mb-8"
             >
               <span className="text-lg text-gray-200">↳</span>
               <h2 className="text-lg font-semibold text-gray-100">Our Team</h2>
             </motion.div>
             
             <div className="grid grid-cols-2 gap-6">
               {/* First row, first column - Description */}
               <motion.div
                 initial={{ opacity: 0, x: -40 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, delay: 0.2 }}
                 viewport={{ once: true }}
                 className="flex items-center"
               >
                 <motion.h3
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   transition={{ duration: 1.5, delay: 0.4 }}
                   className="text-2xl sm:text-3xl font-bold text-white leading-tight"
                 >
                   We are passionate about creating visually stunning and functional solutions that communicate effectively.
                 </motion.h3>
               </motion.div>
              
                             {/* First row, second column - 2 team members */}
               <div className="grid grid-cols-2 gap-4">
                 {[
                   {
                     img: "/assets/person.png",
                     name: "Jocelyn Schleifer",
                     role: "Managing Director",
                   },
                   {
                     img: "/assets/person.png",
                     name: "Jocelyn Schleifer",
                     role: "Managing Director",
                   },
                 ].map((member, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     className="group cursor-pointer"
                   >
                     <div className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700">
                       <Image
                         src={member.img}
                         alt={member.name}
                         width={300}
                         height={300}
                         className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                       />
                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                         <h4 className="text-white font-semibold text-sm">{member.name}</h4>
                         <p className="text-gray-400 text-xs">{member.role}</p>
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
              
                             {/* Second row, first column - 2 team members */}
               <div className="grid grid-cols-2 gap-4">
                 {[
                   {
                     img: "/assets/person.png",
                     name: "Jocelyn Schleifer",
                     role: "Managing Director",
                   },
                   {
                     img: "/assets/person.png",
                     name: "Jocelyn Schleifer",
                     role: "Managing Director",
                   },
                 ].map((member, index) => (
                   <motion.div
                     key={index + 2}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                     viewport={{ once: true }}
                     className="group cursor-pointer"
                   >
                     <div className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700">
                       <Image
                         src={member.img}
                         alt={member.name}
                         width={300}
                         height={300}
                         className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                       />
                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                         <h4 className="text-white font-semibold text-sm">{member.name}</h4>
                         <p className="text-gray-400 text-xs">{member.role}</p>
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
               
               {/* Second row, second column - 2 team members */}
               <div className="grid grid-cols-2 gap-4">
                 {[
                   {
                     img: "/assets/person.png",
                     name: "Jocelyn Schleifer",
                     role: "Managing Director",
                   },
                   {
                     img: "/assets/person.png",
                     name: "Jocelyn Schleifer",
                     role: "Managing Director",
                   },
                 ].map((member, index) => (
                   <motion.div
                     key={index + 4}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                     viewport={{ once: true }}
                     className="group cursor-pointer"
                   >
                     <div className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700">
                       <Image
                         src={member.img}
                         alt={member.name}
                         width={300}
                         height={300}
                         className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                       />
                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                         <h4 className="text-white font-semibold text-sm">{member.name}</h4>
                         <p className="text-gray-400 text-xs">{member.role}</p>
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
            </div>
            
            <div className="flex justify-center w-full mt-8">
              <button className="w-full flex items-center justify-center gap-2 cursor-pointer border border-gray-600 rounded-full px-6 py-4 text-white font-semibold transition-colors">
                See all members
                <span className="text-xl text-gray-400">↗</span>
              </button>
            </div>
          </AnimatedSection>
          
                     {/* CTA Section */}
           <AnimatedSection animationType="slideUp" delay={0.5} className="w-4/5 mx-auto mt-16">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="relative overflow-hidden rounded-xl shadow-2xl"
             >
               <motion.div
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.5 }}
                 className="overflow-hidden rounded-xl"
               >
                 <Image
                   src="/assets/background.png"
                   alt="CTA Background"
                   width={1200}
                   height={600}
                   className="w-full h-96 object-cover"
                 />
               </motion.div>
               <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-8">
                 <motion.h2
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 0.2 }}
                   viewport={{ once: true }}
                   className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                 >
                   Have an idea?<br />
                   Let's <motion.span
                     animate={{ 
                       textShadow: ["0 0 0px #06b6d4", "0 0 20px #06b6d4", "0 0 0px #06b6d4"]
                     }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text"
                   >
                     talk
                   </motion.span>.
                 </motion.h2>
                 <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 0.4 }}
                   viewport={{ once: true }}
                   className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
                 >
                   Visually attractive design from concept to final result. We create solutions that are bold and forward-looking.
                 </motion.p>
                 <motion.button
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   whileHover={{ scale: 1.1, y: -5 }}
                   whileTap={{ scale: 0.95 }}
                   transition={{ duration: 0.3, delay: 0.6 }}
                   viewport={{ once: true }}
                   className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                 >
                   <motion.span
                     animate={{ rotate: [0, 10, -10, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   >
                     📅
                   </motion.span>
                   Free Consultation
                 </motion.button>
               </div>
             </motion.div>
           </AnimatedSection>
        </main>
        <Footer />
      </div>
    </motion.div>
  );
}
