import { useSpring, animated} from "react-spring";
import { useState } from "react";

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
    config: { tension: 300, friction: 15 },
    onRest: () => setPhase(phase + 1),
  });

  // Animación de encogimiento
  const shrinkProps = useSpring({
    to: phase === 1 ? { opacity: 0, transform: "scale(0)", gradient: 100 } : { opacity: 1, transform: "scale(1)", gradient: 25 },
    delay: 500,
    config: { duration: 1500 },
    onRest: onFinished,
    reset: phase === 1,
  });

  return (
    <animated.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      style={{
        background: shrinkProps.gradient.to(
          gradient => `radial-gradient(circle, rgba(255,255,255,1) ${gradient}%, rgba(228,155,148,1) 100%)`
        )
      }}
    >
      <animated.img
        style={phase === 0 ? pulseProps : shrinkProps}
        src="/src/assets/Carga_letras.svg"
        alt="Logo"
        className="h-[455px] xl:w-[455px] xl:h-[455px] lg:w-[455px] lg:h-[100px] md:w-[365px] md:h-[365px] sm:w-[200px] sm:h-[200px]"
      />
    </animated.div>
  );
};

export default LoadingScreen;
