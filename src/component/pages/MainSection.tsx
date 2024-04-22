import React from 'react';
import styled from 'styled-components';
import { SectionsContainer, Section } from 'react-fullpage';

const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eff;

  @media screen and (max-width: 768px) {
    overflow-x: hidden;
  }
`;
const Content = styled.div`
.section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--background-);
    color: var(--textcolor);
    &.section1 {      
    }  
    &.section2 {
    }  
    &.section3 {
    } 
  }
`;
const MainSection = () => {

  const sections = [
    { content: 'Section 1 content' },
    { content: 'Section 2 content' },
    { content: 'Section 3 content' },
  ];

  const options = {
    sectionClassName: 'section', // 각 섹션에 적용될 클래스 이름을 설정합니다.
    anchors: ['section1', 'section2', 'section3'], // 각 섹션의 앵커를 설정합니다. 
    scrollBar: false, // 스크롤 바를 표시할지 여부를 설정합니다.
    navigation: true, // 페이지 내비게이션을 표시할지 여부를 설정합니다.
    verticalAlign: false, // 섹션을 수직으로 정렬할지 여부를 설정합니다.
    sectionPaddingTop: '50px', // 각 섹션의 상단 여백을 설정합니다.
    sectionPaddingBottom: '50px', // 각 섹션의 하단 여백을 설정합니다.
  };
  return (
    <Container>
      <SectionsContainer {...options}>
        <Content>      
          {sections.map((section, index) => (
            <Section key={index} className={`section${index + 1}`}>
              <div className="section-content">{section.content}</div>
            </Section>
          ))}
          </Content>
        </SectionsContainer>
        </Container>
  )
}

export default MainSection;