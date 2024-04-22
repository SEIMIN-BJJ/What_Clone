import { useState } from 'react';
import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';
import styled from 'styled-components';

const PageOne = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;

const PageTwo = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;

const PageThree = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #611212;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;

const Footer = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: #cfdb1e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;
const MainSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <FullpageContainer
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    >
      <FullpageSection>
        <PageOne>Section 1</PageOne>
      </FullpageSection>
      <FullpageSection>
        <PageTwo>Section 2</PageTwo>
      </FullpageSection>
      <FullpageSection>
        <PageThree>Section 3</PageThree>
      </FullpageSection>
      <FullpageSection isAutoHeight>
        <Footer>Footer</Footer>
      </FullpageSection>
    </FullpageContainer>
  );
}

export default MainSection;