import React from 'react'
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    overflow-x: hidden;
  }
`;
const Content = styled.div`
  width: 55rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 130vh;
    flex-direction: column;
  }
`;
const MainSection = () => {
  return (
    <Container>
      <Content>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatem dolorum maxime tempore laboriosam, iste officiis molestiae repudiandae aperiam soluta aut deleniti deserunt, repellat distinctio mollitia similique. Voluptatibus, expedita vel.</Content>
    </Container>
  )
}

export default MainSection;