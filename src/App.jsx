import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { LoadingScreen } from "./components/LoadingScreen";
import { Header } from "./components/Header";
import { Hero } from './components/Hero'

function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  const contentProps = useSpring({
    opacity: loadingFinished ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <div className="font-leagueSpartan">
      {loadingFinished ? (
        <animated.div style={contentProps}>

          {/* Contenido principal */}
          <Header/>
          <Hero/>

        </animated.div>
      ) : (
        <LoadingScreen onFinished={() => setLoadingFinished(true)} />
      )}
    </div>
  );
}

export default App;
