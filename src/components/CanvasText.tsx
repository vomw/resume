import React, { useRef, useEffect } from 'react';

interface CanvasTextProps {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  className?: string;
  maxWidth?: number;
}

const CanvasText: React.FC<CanvasTextProps> = ({ text, fontSize = 16, fontFamily = 'sans-serif', color = 'black', className, maxWidth }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    
    const lineHeight = fontSize * 1.4;
    const fitWidth = maxWidth || canvas.parentElement?.clientWidth || 500;

    canvas.width = fitWidth;

    // Set font properties
    context.font = `${fontSize}px ${fontFamily}`;
    context.fillStyle = color;
    context.textBaseline = 'top';

    const words = text.split(' ');
    let line = '';
    let lines: string[] = [];

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = context.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > fitWidth && n > 0) {
        lines.push(line);
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    canvas.height = lines.length * lineHeight;
    
    context.font = `${fontSize}px ${fontFamily}`;
    context.fillStyle = color;
    context.textBaseline = 'top';

    for (let i = 0; i < lines.length; i++) {
      context.fillText(lines[i], 0, i * lineHeight);
    }
  }, [text, fontSize, fontFamily, color, maxWidth]);

  return <canvas ref={canvasRef} className={className} />;
};

export default CanvasText;
