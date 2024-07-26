import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left">
          <span className="text-xl">Desenvolvedor de software</span>
          <h1 className="h1">
            Olá, Eu sou <br /> <span>Gustavo Polli</span>
          </h1>
          <p>.....</p>
        </div>
        <div>photo</div>
      </div>
    </div>
  </section>
}

export default Home