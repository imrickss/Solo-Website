import React from 'react';
import Image from './assets/robot.png'; // Importe a imagem da logo

interface RobotProps {
  alt?: string;
  width?: string; // Nova propriedade para especificar a largura da imagem
  height?: string; // Nova propriedade para especificar a altura da imagem
}

const RobotImage: React.FC<RobotProps> = ({ alt, width, height }) => {
  return <img src={Image} alt={alt || "Inicio"} width={width} height={height} className="w-full h-auto"/>; // Retorna a imagem da logo com as dimensões especificadas
};

export default RobotImage;
