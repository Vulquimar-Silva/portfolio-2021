import imageVulks from 'assets/images/vulquimarfdsj.jpg';

export default function index() {
  return (
    <>
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">
            Sobre
          </h2>
          <div className="about-content">
            <div className="column left">
              <div>
                <img src={imageVulks} alt="imagem-vulks" />
              </div>
            </div>
            <div className="column right">
              <div className="text">
                Meu nome é
                <span className="typing-2"> Vulquimar Silva</span>
              </div>
              <p>
                Sou apaixonado por tudo que envolve tecnologia.
                <br />
                Hoje com mais de 7 anos trabalhando com TI, posso ver o quanto pude evoluir.
                <br />
                Passei por várias áreas, suporte local, suporte remoto, analista de sistemas e hoje sou um desenvolvedor full stack focado na linguagem javascript.
                <br />
                Tive a sorte de sentir na pele e ver de perto o que é um atendimento de 1° e 2° nível, sendo assim pude aprender desde a primeira tratativa de um chamado até a sua resolução.
                <br />
                Espero ainda alcançar os meus objetivos como profissional e também colaborar com todo o mundo com minhas ideias malucas. 🥸
              </p>
              <a href="https://drive.google.com/file/d/1mOTUXx1j1JX3Fmb6BY-H2EEY-b4Jp_n1/view?format=pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
