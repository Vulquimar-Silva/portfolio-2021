
export default function index() {
  return (
    <>
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title"> Meus serviços </h2>
          <div className="services-content">

            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">Apps Web</div>
                <p>
                  Tecnologias utilizadas - HTML5, CSS3, Javascript ES5/ES6, React.js/Next.js, Typescript, Sass, Tailwind, Node.js, MongoDB, AWS, Docker...
                </p>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">Apps Mobile</div>
                <p>
                  Tecnologias utilizadas para desenvolvimento Android - React Native, Expo, Javascript ES5/ES6, CSS3, Sass, Styled Component...
                </p>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">Apps Desktop</div>
                <p>
                  Tecnologias utilizadas - Electron.js, HTML5, CSS3, Sass, Tailwind, Javascript ES5/ES6, React.js/Next.js, Typescript, Node.js, Powershell, LokiJS, AWS...
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
