import { EffectCoverflow, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HeaderPage } from './styles';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Pages Files
import PageNavBar from '../PageNavBar';
import PageAbout from '../PageAbout';
import PageServices from '../PageServices';
import PageSkills from '../PageSkills';
import PageContact from 'pages/PageContact';
import PageHome from '../PageHome';
import PageFooter from '../PageFooter';

//Imagens
import projetoSpiderman from 'assets/images/spiderman.png';
import projetoVulksfy from 'assets/images/vulksfy.png';
import projetoPlayflix from 'assets/images/playflix.png';
import projetoVulksAutomation from 'assets/images/vulksAutomation.png';
import projetoNubank from 'assets/images/nubank.png';
import projetoVulksCall from 'assets/images/vulks-call.png';

export function PageContainer() {

  return (
    <>
      <HeaderPage>

        <PageNavBar />
        <PageHome />
        <PageAbout />
        <PageServices />
        <PageSkills />

        <section className="teams" id='projects'>
          <div className="max-width">
            <h2 className="title">
              Meus Projetos
            </h2>
            <div className="carousel">
              <div className="card">
                <div className="box">
                  <div className="desktop">
                    <Swiper
                      effect={"coverflow"}
                      grabCursor={true}
                      centeredSlides={true}
                      slidesPerView={2}
                      coverflowEffect={{
                        rotate: 50,
                        stretch: 1,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                      }}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      zoom={true}
                      loop={true}
                      watchSlidesProgress={false}
                      modules={[EffectCoverflow, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img src={projetoSpiderman} alt="Projeto Spiderman" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={projetoVulksfy} alt="Projeto Vulksfy" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={projetoPlayflix} alt="Projeto Playflix" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={projetoVulksAutomation} alt="Projeto Vulks Automation" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={projetoNubank} alt="Projeto Nubank" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={projetoVulksCall} alt="Projeto Vulkscall" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="mobile">
                    <Swiper
                      grabCursor={true}
                      spaceBetween={20}
                      pagination={{
                        type: "progressbar",
                      }}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      centeredSlides={true}
                      modules={[Pagination, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img src={projetoSpiderman} alt="Projeto Spiderman" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={projetoVulksfy} alt="Projeto Vulksfy" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={projetoPlayflix} alt="Projeto Playflix" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={projetoVulksAutomation} alt="Projeto Vulks Automation" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={projetoNubank} alt="Projeto Nubank" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={projetoVulksCall} alt="Projeto Vulkscall" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageContact />
        <PageFooter />

      </HeaderPage>
    </>
  )
}
