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
    Container: '#1A1A1A',
    ContainerHover: '#262626',
    ContainerActive: '#333333',
    ContainerLine: '#404040',
    OnContainer: '#F2F2F2',
  },

  Surface: {
    Container: '#262626',
    ContainerHover: '#333333',
    ContainerActive: '#404040',
    ContainerLine: '#4D4D4D',
    OnContainer: '#F2F2F2',
  },

  SurfaceVariant: {
    Container: '#333333',
    ContainerHover: '#404040',
    ContainerActive: '#4D4D4D',
    ContainerLine: '#595959',
    OnContainer: '#F2F2F2',
  },

  Primary: {
    Main: '#BDB6EC',
    MainHover: '#B2AAE9',
    MainActive: '#ADA3E8',
    MainLine: '#A79DE6',
    OnMain: '#2C2843',
    Container: '#413C65',
    ContainerHover: '#494370',
    ContainerActive: '#50497B',
    ContainerLine: '#575086',
    OnContainer: '#E3E1F7',
  },

  Secondary: {
    Main: '#FFFFFF',
    MainHover: '#E5E5E5',
    MainActive: '#D9D9D9',
    MainLine: '#CCCCCC',
    OnMain: '#1A1A1A',
    Container: '#404040',
    ContainerHover: '#4D4D4D',
    ContainerActive: '#595959',
    ContainerLine: '#666666',
    OnContainer: '#F2EED3',
  },

  Success: {
    Main: '#85E0BA',
    MainHover: '#70DBAF',
    MainActive: '#66D9A9',
    MainLine: '#5CD6A3',
    OnMain: '#0F3D2A',
    Container: '#175C3F',
    ContainerHover: '#1A6646',
    ContainerActive: '#1C704D',
    ContainerLine: '#1F7A54',
    OnContainer: '#CCF2E2',
  },

  Warning: {
    Main: '#E3BA91',
    MainHover: '#DFAF7E',
    MainActive: '#DDA975',
    MainLine: '#DAA36C',
    OnMain: '#3F2A15',
    Container: '#5E3F20',
    ContainerHover: '#694624',
    ContainerActive: '#734D27',
    ContainerLine: '#7D542B',
    OnContainer: '#F3E2D1',
  },

  Critical: {
    Main: '#E69D9D',
    MainHover: '#E28D8D',
    MainActive: '#E08585',
    MainLine: '#DE7D7D',
    OnMain: '#401C1C',
    Container: '#602929',
    ContainerHover: '#6B2E2E',
    ContainerActive: '#763333',
    ContainerLine: '#803737',
    OnContainer: '#F5D6D6',
  },

  Other: {
    FocusRing: 'rgba(255, 255, 255, 0.5)',
    Shadow: 'rgba(0, 0, 0, 1)',
    Overlay: 'rgba(0, 0, 0, 0.8)',
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
