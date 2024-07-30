import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 7rem 2rem 2rem;
  background-color: #d0d0d0;
  height: 100vh;
  color: #102542;

  @media (max-width: 768px) {
    padding: 7rem 1rem 1rem;
  }
`;

const Contact: React.FC = () => (
  <ContactContainer id='contact'>
    <h2>Contact Me</h2>
    <p>Some information about how to contact me.</p>
  </ContactContainer>
);

export default Contact;
