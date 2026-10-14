import { createTheme } from '@vanilla-extract/css';
import { color } from 'folds';

export const silverTheme = createTheme(color, {
  Background: {
    Container: '#FFECDC',
    ContainerHover: '#F7C49A',
    ContainerActive: '#F89931',
    ContainerLine: '#C7E3BB',
    OnContainer: '#38332E',
  },

  Surface: {
    Container: '#FFECDC',
    ContainerHover: '#F7C49A',
    ContainerActive: '#F89931',
    ContainerLine: '#C7E3BB',
    OnContainer: '#38332E',
  },

  SurfaceVariant: {
    Container: '#C7E3BB',
    ContainerHover: '#B3D5C7',
    ContainerActive: '#99C7B4',
    ContainerLine: '#85B9A8',
    OnContainer: '#166B52',
  },

  Primary: {
    Main: '#166B52',
    MainHover: '#125A44',
    MainActive: '#0E4B3B',
    MainLine: '#0C3D33',
    OnMain: '#FFFFFF',
    Container: '#C7E3BB',
    ContainerHover: '#B3D5C7',
    ContainerActive: '#99C7B4',
    ContainerLine: '#85B9A8',
    OnContainer: '#166B52',
  },

  Secondary: {
    Main: '#38332E',
    MainHover: '#2D2925',
    MainActive: '#23201D',
    MainLine: '#1E1B18',
    OnMain: '#FFECDC',
    Container: '#C7E3BB',
    ContainerHover: '#B3D5C7',
    ContainerActive: '#99C7B4',
    ContainerLine: '#85B9A8',
    OnContainer: '#38332E',
  },

  Success: {
    Main: '#166B52',
    MainHover: '#125A44',
    MainActive: '#0E4B3B',
    MainLine: '#0C3D33',
    OnMain: '#FFFFFF',
    Container: '#C7E3BB',
    ContainerHover: '#B3D5C7',
    ContainerActive: '#99C7B4',
    ContainerLine: '#85B9A8',
    OnContainer: '#166B52',
  },

  Warning: {
    Main: '#F89931',
    MainHover: '#E68A2A',
    MainActive: '#D47B25',
    MainLine: '#C26C20',
    OnMain: '#FFFFFF',
    Container: '#F8D072',
    ContainerHover: '#E6C163',
    ContainerActive: '#D4B254',
    ContainerLine: '#C2A345',
    OnContainer: '#7D542B',
  },

  Critical: {
    Main: '#9A2584',
    MainHover: '#8A1F74',
    MainActive: '#7A1964',
    MainLine: '#6A1354',
    OnMain: '#FFFFFF',
    Container: '#FAD9F4',
    ContainerHover: '#F5C7E4',
    ContainerActive: '#EBD5D4',
    ContainerLine: '#E2C3C3',
    OnContainer: '#6E0B0B',
  },

  Other: {
    FocusRing: 'rgba(22, 107, 82, 0.5)',
    Shadow: 'rgba(56, 51, 46, 0.2)',
    Overlay: 'rgba(56, 51, 46, 0.5)',
  },
});

const darkThemeData = {
  Background: {
    Container: '#1A1916',
    ContainerHover: '#262621',
    ContainerActive: '#33322C',
    ContainerLine: '#403F38',
    OnContainer: '#FFFBDE',
  },

  Surface: {
    Container: '#262621',
    ContainerHover: '#33322C',
    ContainerActive: '#403F38',
    ContainerLine: '#4D4B43',
    OnContainer: '#FFFBDE',
  },

  SurfaceVariant: {
    Container: '#33322C',
    ContainerHover: '#403F38',
    ContainerActive: '#4D4B43',
    ContainerLine: '#59584E',
    OnContainer: '#FFFBDE',
  },

  Primary: {
    Main: '#C7E3BB',
    MainHover: '#B3D5C7',
    MainActive: '#99C7B4',
    MainLine: '#85B9A8',
    OnMain: '#166B52',
    Container: '#166B52',
    ContainerHover: '#125A44',
    ContainerActive: '#0E4B3B',
    ContainerLine: '#0C3D33',
    OnContainer: '#C7E3BB',
  },

  Secondary: {
    Main: '#FFFBDE',
    MainHover: '#E5E2C8',
    MainActive: '#D9D5BD',
    MainLine: '#CCC9B2',
    OnMain: '#1A1916',
    Container: '#33322C',
    ContainerHover: '#403F38',
    ContainerActive: '#4D4B43',
    ContainerLine: '#59584E',
    OnContainer: '#FFFBDE',
  },

  Success: {
    Main: '#C7E3BB',
    MainHover: '#B3D5C7',
    MainActive: '#99C7B4',
    MainLine: '#85B9A8',
    OnMain: '#166B52',
    Container: '#166B52',
    ContainerHover: '#125A44',
    ContainerActive: '#0E4B3B',
    ContainerLine: '#0C3D33',
    OnContainer: '#C7E3BB',
  },

  Warning: {
    Main: '#F89931',
    MainHover: '#E68A2A',
    MainActive: '#D47B25',
    MainLine: '#C26C20',
    OnMain: '#FFFFFF',
    Container: '#33322C',
    ContainerHover: '#403F38',
    ContainerActive: '#4D4B43',
    ContainerLine: '#59584E',
    OnContainer: '#F89931',
  },

  Critical: {
    Main: '#9A2584',
    MainHover: '#8A1F74',
    MainActive: '#7A1964',
    MainLine: '#6A1354',
    OnMain: '#FFFFFF',
    Container: '#33322C',
    ContainerHover: '#403F38',
    ContainerActive: '#4D4B43',
    ContainerLine: '#59584E',
    OnContainer: '#9A2584',
  },

  Other: {
    FocusRing: 'rgba(199, 227, 187, 0.5)',
    Shadow: 'rgba(0, 0, 0, 0.6)',
    Overlay: 'rgba(26, 25, 22, 0.8)',
  },
};

export const darkTheme = createTheme(color, darkThemeData);

export const butterTheme = createTheme(color, {
  ...darkThemeData,
  Background: {
    Container: '#1A1916',
    ContainerHover: '#262621',
    ContainerActive: '#33322C',
    ContainerLine: '#403F38',
    OnContainer: '#FFFBDE',
  },

  Surface: {
    Container: '#262621',
    ContainerHover: '#33322C',
    ContainerActive: '#403F38',
    ContainerLine: '#4D4B43',
    OnContainer: '#FFFBDE',
  },

  SurfaceVariant: {
    Container: '#33322C',
    ContainerHover: '#403F38',
    ContainerActive: '#4D4B43',
    ContainerLine: '#59584E',
    OnContainer: '#FFFBDE',
  },

  Secondary: {
    Main: '#FFFBDE',
    MainHover: '#E5E2C8',
    MainActive: '#D9D5BD',
    MainLine: '#CCC9B2',
    OnMain: '#1A1916',
    Container: '#403F38',
    ContainerHover: '#4D4B43',
    ContainerActive: '#59584E',
    ContainerLine: '#666459',
    OnContainer: '#F2EED3',
  },
});
