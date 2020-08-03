import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <h2>Ryan Maia</h2>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://ryansprojects.com.br">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
