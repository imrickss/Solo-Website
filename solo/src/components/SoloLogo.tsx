import React from 'react';
import Solo from './assets/solo-logo-white.png'; // Importe a imagem da logo

interface SoloProps {
  alt?: string;
  width?: string; // Nova propriedade para especificar a largura da imagem
  height?: string; // Nova propriedade para especificar a altura da imagem
}

const SoloLogo: React.FC<SoloProps> = ({ alt, width, height }) => {
  return <img src={Solo} alt={alt || "Logo"} width={width} height={height} />; // Retorna a imagem da logo com as dimensões especificadas
};

export default SoloLogo;
