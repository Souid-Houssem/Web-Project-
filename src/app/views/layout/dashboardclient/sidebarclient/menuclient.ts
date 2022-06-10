import { MenuClientItem } from './menuclientmodel';

export const MENU: MenuClientItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Home',
    icon: 'home',
    link: '/client'
  },
  {
    label: 'Mes Vehicules',
    icon: 'clipboard',
    link: '/client/mesvehicules'
  },

  {
    label: 'Mes Demandes',
    icon: 'file-text',
    link: '/client/mesdemandes'
  },

  {
    label: 'Historique',
    icon: 'database',
    link: '/client/historique'
  },

  {
    label: 'Geolocalisation',
    icon: 'map-pin',
    link: '/client/geolocalisation'
  },

];

