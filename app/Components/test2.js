// app/Components/Newlaunches.jsx
import ProductCard from './Productcard';
import Mainbtn from './Mainbtn';
import Link from 'next/link';
import { products } from '../utils/Produtsarray'; // Adjust the path as necessary

const Newlaunches = () => {
  // Filter products based on the 'newlaunch' category
  const newLaunchProducts = products.filter(product => product.category === 'newlaunch');

  return (
    <div className='w-full h-auto flex flex-col items-center'>
      <h1 className='text-[#3C486B] text-[1.8rem] lg:text-[2.5rem] font-bold text-center'>New <span className='text-[#FF8686]'>Launches</span></h1>
      <h2 className='mb-10'>Recently Launched</h2>
      <div className="product-sec w-full flex gap-8 px-10 flex-wrap shrink-0 justify-center">
        {newLaunchProducts.map((product) => (
          <ProductCard key={product.id} product={product} /> // Pass product as prop
        ))}
      </div>
      <div className="bt-section mt-10">
        <Link href={'/products/newlaunch'}>
          <Mainbtn />
        </Link>
      </div>
    </div>
  );
};

// export default Newlaunches;




































'use client';
import { useEffect, useRef, useState, Suspense } from 'react';
import styles from '../styles/animations.module.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const IPhoneModel = ({ scrollProgress }) => {
  const { scene } = useGLTF('/New folder/scene.gltf');
  const modelRef = useRef();
  const [scale, setScale] = useState([50, 50, 50]);
  const [position, setPosition] = useState([0, -4, 0]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setScale([30, 30, 30]);
        setPosition([0, -3, 0]);
      } else {
        setScale([50, 50, 50]);
        setPosition([0, -4, 0]);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      let rotation;
      if (scrollProgress < 0.5) {
        rotation = Math.PI * scrollProgress * 4;
      } else {
        rotation = (scrollProgress) * Math.PI * 4;
      }
      modelRef.current.rotation.y = rotation + Math.PI;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={scale}
      position={position}
      rotation={[0, Math.PI, 0]}
    />
  );
};

const AnimatedSection = () => {
  const [isMenuIconVisible, setIsMenuIconVisible] = useState(false);
  const [isDownloadButtonVisible, setIsDownloadButtonVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const canvasRef = useRef();

  useEffect(() => {
    ScrollTrigger.matchMedia({
   
      "(min-width: 1281px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '103vh',
          x: '-50vw',
          duration: 1.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '235vh',
            x: '5vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },




      // between 1024px and 1280px
      "(min-width: 1150px) and (max-width: 1280px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '110vh',
          x: '-50vw',
          duration: 1.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '242vh',
            x: '10vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },
















      // between 1024px and 1280px
      "(min-width: 1024px) and (max-width: 1149px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '105vh',
          x: '-50vw',
          duration: 1.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '242vh',
            x: '10vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },

      // dimension-768 to 1024
      "(min-width: 768px) and (max-width: 885px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '190vh',
          x: '0vw',
          duration: 0.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '195vh',
            x: '0vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },


      "(min-width: 886px) and (max-width: 1023px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '200vh',
          x: '0vw',
          duration: 0.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '210vh',
            x: '0vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },






      // dimension-640 to 768
      "(min-width: 600px) and (max-width: 700px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '190vh',
          x: '0vw',
          duration: 0.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '192h',
            x: '0vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },





       // dimension-640 to 768
       "(min-width: 701px) and (max-width: 768px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '200vh',
          x: '0vw',
          duration: 0.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '202h',
            x: '0vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },






      // dimension-640 to 768
      "(min-width: 350px) and (max-width: 366px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '215vh',
          x: '0vw',
          duration: 0.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '220vh',
            x: '0vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },






      "(min-width: 367px) and (max-width: 425px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '200vh',
          x: '0vw',
          duration: 0.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '205vh',
            x: '0vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },















      "(min-width: 426px) and (max-width: 500px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '180vh',
          x: '0vw',
          duration: 0.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '185vh',
            x: '0vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      },

      "(min-width: 501px) and (max-width: 600px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gettoknow",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
        tl.to(canvasRef.current, {
          y: '170vh',
          x: '0vw',
          duration: 0.5,
          ease: "power3.inOut",
        })
          .to(canvasRef.current, {
            y: '155vh',
            x: '0vw',
            duration: 1.5,
            ease: "power3.inOut",
          });
      }










    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMenuIconVisible(true);
      setIsDownloadButtonVisible(true);
    }, 1000);

    const menuIconTimer = setTimeout(() => {
      setIsHeadingVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(menuIconTimer);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="main w-full h-auto lg:min-h-[100vh] flex items-center justify-center bg-[#3EA99F]" id="home">
      

      <div className="nav-sec absolute top-0 w-full h-[10vh] flex items-center justify-between absolute py-4 px-8">
      <div className={`menuicon w-full flex items-center justify-between ${!isMenuIconVisible && styles.hidden}`}>
        <button
          className={`z-50 bg-transparent border-none ${styles.menuIconSlideDown}`}
          onClick={toggleNavbar}
        >
          <div className={`hamburger  w-10 h-10 rounded-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg flex flex-col justify-center items-center ${isOpen ? 'active' : ''}`}>
            <span className={`w-6 h-[2px] bg-[#3ea99f] transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-[3px]' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-[#3ea99f] mt-1 transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}></span>
          </div>
        </button>

        <div 
          className={`fixed inset-0 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} z-40`}
          onClick={closeNavbar}
        >
          <div className="flex lg:flex-row flex-col-reverse h-full w-full items-center justify-around rounded-r-xl" onClick={(e) => e.stopPropagation()}>
            <div className="left-sec w-full lg:w-1/2 h-[60vh] lg:h-full py-20 lg:pl-10 flex flex-col items-center lg:items-start justify-end text-[1.5rem] sm:text-[2rem] lg:text-[3rem] text-black leading-[3rem] lg:leading-[3.5rem]">
              <Link href="#home" className="font-medium hover:text-[#3EA99F] text-bold" onClick={closeNavbar}>Home</Link>
              <Link href="#gettoknow" className="font-medium hover:text-[#3EA99F] text-bold" onClick={closeNavbar}>Get To Know</Link>
              <Link href="#features" className="font-medium hover:text-[#3EA99F] text-bold" onClick={closeNavbar}>Features</Link>
              <Link href="#pricing" className="font-medium hover:text-[#3EA99F] text-bold" onClick={closeNavbar}>Pricing</Link>
              <Link href="#contact" className="font-medium hover:text-[#3EA99F] text-bold" onClick={closeNavbar}>Contact Us</Link>
            </div>
            <div className="right-sec w-full lg:w-1/2 h-[40vh] lg:h-full flex items-end lg:items-center justify-center">
              <img className='logo-img w-[40%] sm:w-[18vw] lg:w-[20vw]' src="/sukhino_logo.svg" alt="sukhino logo" />
            </div>
          </div>
        </div>
      </div>

      <button className={`w-auto lg:w-[10vw] h-[7vh] px-2 lg:px-0 rounded text-white bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 ${!isDownloadButtonVisible && styles.hidden} ${styles.downloadButtonSlideDown}`}>
        Download
      </button>
    </div>

        {/* <div className={`heading w-[80vw] lg:w-[80vw] bg-red-500 flex flex-col justify-end text-white ${!isHeadingVisible && styles.hidden} ${styles.headingSlideUp}`}>
          <h1 className="text-6xl font-semibold">Sukhino</h1>
          <p className="mb-20 lg:mb-5 text-justify">Your All-in-One Lifestyle Management App Powered by a cutting-edge generative AI agent, Sukhino offers personalized wellness solutions, from meal planning to exercise and mental health support—all in one app. With its intelligent assistant, Sukhino tailors advice and routines to your needs, helping you achieve a balanced lifestyle effortlessly. 

            <br/>
            <br/>
            PaLM 2, a powerful Large Language Model (LLM), can be leveraged in healthcare to analyze patient symptoms, recommend potential treatment options, and assist in provider selection based on specific needs Additionally, it can generate comprehensive descriptions of healthcare issues, enabling patients to draft clear and concise emails to providers, ensuring that key symptoms and concerns are communicated effectively for more accurate diagnosis and care. 

 </p>
        </div> */}



        <div className="content flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-0 py-[2vw] lg:py-0 w-full lg:w-[95vw]">
              <div className="para-sec w-full lg:w-[50vw] h-full  px-10">

              <h1 className="main-title text-[3rem] sm:text-[5rem] text-white font-semibold">Sukhino</h1>
          <p  className="mb-20 lg:mb-5 text-justify text-white main-para-sec">Your All-in-One Lifestyle Management App powered by a cutting-edge generative AI agent, Sukhino offers personalized wellness solutions, from meal planning to exercise and mental health support—all in one app. With its intelligent assistant, Sukhino tailors advice and routines to your needs, helping you achieve a balanced lifestyle effortlessly. 

            <br/>
            <br/>
            PaLM 2, a powerful Large Language Model (LLM), can be leveraged in healthcare to analyze patient symptoms, recommend potential treatment options, and assist in provider selection based on specific needs. Additionally, it can generate comprehensive descriptions of healthcare issues, enabling patients to draft clear and concise emails to providers, ensuring that key symptoms and concerns are communicated effectively for more accurate diagnosis and care. 

 </p>

              </div>

      <div ref={canvasRef} className="canvas-container w-[50vw] h-full flex items-center justify-center  ">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ width: '50vw', height: '100vh' }} className=' w-full flex items-center justify-center'>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <IPhoneModel scrollProgress={scrollProgress} />
          </Suspense>
        </Canvas>
      </div>
        </div>
      
    </div>
  );
};

// export default AnimatedSection;

