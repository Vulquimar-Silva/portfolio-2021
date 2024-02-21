import { v4 as uuidv4 } from 'uuid';

import projetoSpiderman from 'assets/images/spiderman.png';
import projetoVulksfy from 'assets/images/vulksfy.png';
import projetoPlayflix from 'assets/images/playflix.png';
import projetoVulksAutomation from 'assets/images/vulksAutomation.png';
import projetoNubank from 'assets/images/nubank.png';
import projetoVulksCall from 'assets/images/vulks-call.png';

import { TypeImagesCarousel } from '../../interfaces/IImagesCarousel'



export const ImagesCarousel: TypeImagesCarousel[] = [{
  id: uuidv4(),
  imageAlt: 'Spiderman',
  imageSrc: projetoSpiderman,
  plataforma: 'Web',
},
{
  id: uuidv4(),
  imageAlt: 'Vulksfy',
  imageSrc: projetoVulksfy,
  plataforma: 'Desktop',
},
{
  id: uuidv4(),
  imageAlt: 'Vulks Call',
  imageSrc: projetoVulksCall,
  plataforma: 'Web',
},
{
  id: uuidv4(),
  imageAlt: 'Vulks Automation',
  imageSrc: projetoVulksAutomation,
  plataforma: 'Desktop',
},
{
  id: uuidv4(),
  imageAlt: 'Playflix',
  imageSrc: projetoPlayflix,
  plataforma: 'Web',
},
{
  id: uuidv4(),
  imageAlt: 'Nubank',
  imageSrc: projetoNubank,
  plataforma: 'Web',
},
];
