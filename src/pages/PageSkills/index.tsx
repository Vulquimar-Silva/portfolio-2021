
export default function PageSkills() {
  return (
    <>
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">Minhas skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">Uma pequena observação sobre minhas skills</div>
              <p>
                O meu objetivo é evoluir como profissional dentro da stack javascript, isso envolve tudo que a linguagem pode alcançar.
                <br />
                Lógico que, isso em nada me impede em conhecer e quem sabe trabalhar com outras tecnologias.
                <br />
                Por exemplo, também gosto de trabalhar com nuvem (AWS), Golang, Powershell, Kubernetes, Terraform e por aí vai...

              </p>
              <a href="#top">Saiba mais</a>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML5</span>
                  <span>80%</span>
                </div>
                <div className="line html"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>CSS/SASS</span>
                  <span>65%</span>
                </div>
                <div className="line css"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>Javascript</span>
                  <span>75%</span>
                </div>
                <div className="line javascript"></div>
              </div>


              <div className="bars">
                <div className="info">
                  <span>React.js/Next.js</span>
                  <span>60%</span>
                </div>
                <div className="line react"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>Electron.js</span>
                  <span>65%</span>
                </div>
                <div className="line electron"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>Node.js</span>
                  <span>50%</span>
                </div>
                <div className="line node"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
