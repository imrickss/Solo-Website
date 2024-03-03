import React from 'react';
import Image from './assets/header-image.svg'; // Importe a imagem da logo

interface HeaderProps {
  alt?: string;
  width?: string; // Nova propriedade para especificar a largura da imagem
  height?: string; // Nova propriedade para especificar a altura da imagem
}

const HeaderImage: React.FC<HeaderProps> = ({ alt, width, height }) => {
  return <img src={Image} alt={alt || "Inicio"} width={width} height={height} />; // Retorna a imagem da logo com as dimensões especificadas
};

export default HeaderImage;
