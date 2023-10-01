import { useSpring, animated } from "react-spring";
import SpinnerHero from "../assets/GiroHero.svg";
import SpinnerHeroGrande from "../assets/grupoHeader1.svg";
import SpinnerHero2 from "../assets/grupoHeader2.svg";
import SpinnerHero3 from "../assets/grupoHeader3.svg";

export const Hero = () => {
  const spin = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    config: { duration: 15000 }, // Duración en milisegundos, en este caso 5 segundos.
    reset: true, // Vuelve a iniciar la animación una vez finalizada.
    loop: true, // Hace que la animación se repita indefinidamente.
  });

  return (
    <div className="w-auto bg-white mt-[100px]">
      <div className="mx-[51px] flex flex-row items-center">
        <div>
          <h1 className="font-extrabold	text-9xl">Diseño para todes.</h1>
          <div className="w-[760px]">
            <p className="font-bold text-4xl">
              Somos una plataforma que integra diseñadores, proyectos y
              productos creativos.
            </p>
          </div>
        </div>
        <div className="pl-40">
          <animated.img
            style={spin}
            src={SpinnerHero}
            alt="Spinner de hero girando"
            className="w-[250px] h-[250px] mb-12"
          />
        </div>
      </div>

      <div className="w-auto mx-[116px] flex px-[70px] pt-[38px] border-t-4 border-black justify-center flex-col">
        <p className="font-medium text-4xl text-center">
          Creemos que la colaboración y la formación de redes es vital para el
          sostenimiento de las ideas y de las organizaciones creativas con el
          fin de mantenerse autogestivas y libres.
        </p>
        <p className="font-black text-6xl mt-[38px] px-[55px] text-center">
          Pariticpativo, colaborativo y comunitario
        </p>

        {/* Aquí va un grupo con el objeto girando y los otros dos */}
        <div className="w-auto mt-[50px] px-[55px] flex justify-around">
            <animated.img src="" alt="Spinner grande girando" />
            <img src={SpinnerHero2} alt="Imagen hero 2" className="h-[144px] w-[144px]"/>
            <img src={SpinnerHero3} alt="Imagen hero 3" className="h-[144px] w-[144px]"/>
        </div>
      </div>
    </div>
  );
};
