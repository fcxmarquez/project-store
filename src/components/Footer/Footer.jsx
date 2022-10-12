import React from 'react';
import { FooterContainer } from './footer.styles';

export const Footer = () => (
  <FooterContainer className="columns is-multiline is-mobile is-centered">
    <div className="column is-8">
      <p className='block'>Store Merch</p>
    </div>
    <div className="column">
      <p>Todos los derechos reservados</p>
    </div>
  </FooterContainer>
);
