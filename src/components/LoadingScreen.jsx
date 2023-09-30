import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";

export const LoadingScreen = ({ onFinished }) => {
  const [phase, setPhase] = useState(0);

  // Animación de pulso
  const pulseProps = useSpring({
    to: phase === 0 ? [
      { transform: 'scale(1.1)' }, 
      { transform: 'scale(1)' }, 
      { transform: 'scale(1.1)' }, 
      { transform: 'scale(1)' }, 
      { transform: 'scale(1.1)' }, 
      { transform: 'scale(1)' }
    ] : { transform: 'scale(1)' },
    config: { tension: 200, friction: 15 },
    onRest: () => setPhase(phase + 1),
  });

  // Animación de encogimiento
  const shrinkProps = useSpring({
    to: phase === 1 ? { opacity: 0, transform: "scale(0)" } : { opacity: 1, transform: "scale(1)" },
    delay: 500,
    config: { duration: 2500 },
    onRest: onFinished,
    reset: phase === 1,
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-radial">
      <animated.img
        style={phase === 0 ? pulseProps : shrinkProps}
        src="/src/assets/Carga_letras.svg"
        alt="Logo"
        className="w-[485px] h-[485px]"
      />
    </div>
  );
};

export default LoadingScreen;