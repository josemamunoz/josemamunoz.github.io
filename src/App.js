import "./App.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Foto_JM from "./images/Foto_JM.png";

function App() {
  return (
    <div className="App bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">JM</h1>
          <ul className="flex items-center">
            <li className="px-2">Home</li>
            <li className="px-2">Proyectos</li>
            <li className="px-2">Curriculum</li>
          </ul>
        </nav>
        <div className="text-center p-10 max-w-lg min-w-min mx-auto">
          <div className="flex justify-center mb-5">
            <img
              className="rounded-full w-40 h-40"
              src={Foto_JM}
              alt="Foto JM"
            />
          </div>

          <h2 className="text-3xl py-2">José Manuel Muñoz Silva</h2>
          <h3 className="text-xl py-2">Desarrollador, Ingeniero Ambiental</h3>
          <p className="text-md py-2 leading-8 text-gray-800 text-justify">
            Ingeniero ambiental, transformando mi carrera para ser desarrollador
            web
            <br />
            Realicé el bootcamp de Full Stack Developer en 4Geeks Academy, donde
            aprendí Javascript y Python, utilizando React y Flask. <br />
            En esta página, pretendo demostrar mis habilidades como
            desarrollador pero tambien como ingeniero ambiental
          </p>
        </div>
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out mb-6"
        >
          Contáctame
        </button>
        <div className="text-2xl mb-12 flex justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/josemamunoz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/josemamunoz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="text-center p-10 max-w-lg mx-auto">
          <h3 className="text-xl py-2">Proyectos</h3>
          <div class="flex justify-center my-5">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img
                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                alt=""
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Movies</h5>
                <p class="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="text-center p-10 max-w-lg mx-auto">
          <h3 className="text-xl py-2">Curriculum</h3>
        </div>
      </section>
    </div>
  );
}

export default App;
