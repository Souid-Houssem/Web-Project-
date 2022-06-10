import { MenuChauffeurItem } from './menuchauffeurmodel';

export const MENU: MenuChauffeurItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Home',
    icon: 'home',
    link: '/chauffeur'
  },
  {
    label: 'Mes Mission',
    icon: 'airplay',
    link: '/chauffeur/mesmission'
  },

  {
    label: 'Mes Clients',
    icon: 'users',
    link: '/chauffeur/mesclient'
  },

  {
    label: 'Mes Camions',
    icon: 'truck',
    link: '/chauffeur/mescamion'
  },

  {
    label: 'Geolocalisation',
    icon: 'map-pin',
    link: '/chauffeur/geolocalisation'
  },

  {
    label: 'Historique',
    icon: 'database',
    link: '/chauffeur/historique'
  },
];
