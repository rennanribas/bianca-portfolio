import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 3rem 2rem 2rem;
  background-color: #f0f0f0;
  height: 100vh;
  color: #102542;
  font-family: Futura;

  h2 {
    color: #2793d4;
  }

  p {
    font-size: 1.2rem;
    color: #102847;
  }

  @media (max-width: 768px) {
    padding: 7rem 1rem 1rem;
  }
`;

const About: React.FC = () => (
  <AboutContainer id='about'>
    <h2>Quem eu sou</h2>
    <p>
      Personal trainer especializada em treinar mulheres com problemas de saúde,
      incluindo doenças crônicas não transmissíveis.
    </p>
    <p>
      Minha missão é ajudar pessoas de todas as idades, especialmente aquelas
      entre 30 e 70 anos, a viverem vidas mais saudáveis e ativas,
      independentemente dos desafios que possam enfrentar.
    </p>
    <p>
      Com 9 anos de experiência na área de saúde e fitness, desenvolvi programas
      personalizados que consideram as necessidades individuais de cada cliente.
    </p>
    <p>
      Acredito que todos podem melhorar sua qualidade de vida através de
      exercícios físicos adequados.
    </p>
  </AboutContainer>
);

export default About;
