import { MenuAdminItem } from './menuadminmodel';

export const MENU: MenuAdminItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Home',
    icon: 'home',
    link: '/admin'
  },
  {
    label: 'List Clients',
    icon: 'users',
    link: '/admin/listclient'
  },

  {
    label: 'List Vehicules',
    icon: 'clipboard',
    link: '/admin/listvehicule'
  },

  {
    label: 'List Camions',
    icon: 'truck',
    link: '/admin/listcamion'
  },
  {
    label: 'List Demandes',
    icon: 'file-text',
    link: '/admin/listdemandes'
  },

  {
    label: 'List Chauffuers',
    icon: 'user',
    link: '/admin/listchauffeur'
  },

  {
    label: 'Geolocalisation',
    icon: 'map-pin',
    link: '/admin/geolocalisation'
  },

  {
    label: 'Historique',
    icon: 'database',
    link: '/admin/historique'
  },


];
