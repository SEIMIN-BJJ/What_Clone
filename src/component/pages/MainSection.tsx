import React, { useState, useEffect } from "react";
import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';
import styled from 'styled-components';
import { motion } from "framer-motion";
import JapnOneIMG from "../assets/images/japan-1.jpg";
import JapnTwoIMG from "../assets/images/japan-2.jpg";
import JapnThreeIMG from "../assets/images/japan-3.jpg";
import JapnFourIMG from "../assets/images/japan-4.jpg";

const PageOne = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  background-image: url(${JapnOneIMG});
  color: #fff;

`;

const PageTwo = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  background-image: url(${JapnTwoIMG});

`;

const PageThree = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: #611212;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  background-image: url(${JapnThreeIMG});

`;

const Footer = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: #cfdb1e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  background-image: url(${JapnFourIMG});
  background-position: center center;

`;
const MainSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animate, setAnimate] = useState(false);

  const animationLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 1,
    delay: 0.2,
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  
    if (window.innerWidth >= 768) {
      // 웹페이지에서의 스크롤 범위
      if (scrollPosition > 300 && scrollPosition < 600) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
    } else {
      // 모바일에서의 스크롤 범위
      if (scrollPosition > 600) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []); 

  return (
    <FullpageContainer
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    >
      <FullpageSection>
        <PageOne
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>
        </PageOne>
      </FullpageSection>
      <FullpageSection>
        <PageTwo          
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>
        </PageTwo>
      </FullpageSection>
      <FullpageSection>
        <PageThree
          variants={animationLeft}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          transition={transition}>
        </PageThree>
      </FullpageSection>
      <FullpageSection isAutoHeight>
        <Footer>
        </Footer>
      </FullpageSection>
    </FullpageContainer>
  );
}

export default MainSection;