// @mui
import { arSD, enUS, frFR, viVN, zhCN } from '@mui/material/locale';

// ROOT PATH AFTER LOGIN SUCCESSFUL

// LAYOUT
// ----------------------------------------------------------------------
export const HOST_API = process.env.REACT_APP_HOST_API_KEY || '';

export const PAYMENT_API = process.env.REACT_APP_PAYMENT_API_KEY || '';
export const CUSTOMER_API = process.env.REACT_APP_CUSTOMER_API_KEY || '';
export const VERIFY_API = process.env.REACT_APP_VERIFY_API_KEY || '';
export const ORCH_API = process.env.REACT_APP_ORCH_API_KEY || '';
export const EDGE_API = process.env.REACT_APP_EDGE_API_KEY || '';
export const VIDEO_API = process.env.REACT_APP_VIDEO_API_KEY || '';
export const DOCUMENT_API = process.env.REACT_APP_DOCUMENT_API_KEY || '';
export const SCRIPT_API = process.env.REACT_APP_SCRIPT_API_KEY || '';
export const PAYMENT_ORDERS = process.env.REACT_APP_PAYMENT || '';
export const GRAPH_API = process.env.REACT_APP_GRAPH_API_KEY || '';
export const SIGNALR_API = process.env.REACT_APP_SIGNALR_API_KEY || '';
export const INSIGHTS_KEY = process.env.REACT_APP_INSIGHTS_KEY || '';
export const VIDEO_AUTHENTICATION =
  process.env.REACT_APP_VIDEO_AUTHENTICATION || '';

export const AOS_URI = process.env.REACT_APP_AZURE_AOS_URI || '';

export const CATEGORY_DOCUMENT_ID = 'bf85a291-a047-4657-9943-429e2248b069';
export const CATEGORY_DOCUMENT_INEF_ID = 'bf85a291-a047-4657-9943-429e2248b069';
export const CATEGORY_DOCUMENT_INEB_ID = 'BF85A291-A047-4657-9943-429E2248B070';
export const CATEGORY_DOCUMENT_FACE = 'BF85A291-A047-4657-9943-429E2248B071';
export const CATEGORY_DOCUMENT_VIDEO = 'BF85A291-A047-4657-9943-429E2248B072';
export const CATEGORY_DOCUMENT_DOCUMENTS =
  'BF85A291-A047-4657-9943-429E2248B073';
export const SHOW_TESTPAGE = process.env.REACT_APP_SHOW_TESTPAGE === 'true';

export const PRODUCTION = process.env.REACT_APP_PRODUCTION === 'true';
export const STAGING = process.env.REACT_APP_STAGING === 'true';
export const DEVELOPMENT = process.env.REACT_APP_DEVELOPMENT === 'true';

// export const CATEGORY_SCRIPTING_AOS_ID = "C6E346E6-8A5D-4934-9EE8-3DC5187FFA67";
export const CATEGORY_SCRIPTING_AOS_ID = 'C6E346E6-8A5D-4934-9EE8-3DC5187FFA71';

export const STATION = {
  id: '1001b543-9be7-4436-ad31-08153adf7864',
  deviceId: '1001b543-9be7-4436-ad31-08153adf7864',
  kioskName: '',
  name: '',
};

export const IdKiosk = {
  Chalco: '20018D4F-41BC-4280-A5D0-ED151F660AA2',
  Ixtapaluca: '20018D4F-41BC-4280-A5D0-ED151F660AA3',
  Acatlan: '20018D4F-41BC-4280-A5D0-ED151F660AA4',
  Texcoco: '20018D4F-41BC-4280-A5D0-ED151F660AAD',
  Texmelucan: '20018D4F-41BC-4280-A5D0-ED151F660AAE',
  Tlaxcala: '20018D4F-41BC-4280-A5D0-ED151F660AAF',
  Tlahuac: '20018D4F-41BC-4280-A5D0-ED151F660BBA',
};

export const viewSelfCheckIn = [
  IdKiosk.Ixtapaluca,
  IdKiosk.Chalco,
  IdKiosk.Texmelucan,
  IdKiosk.Acatlan,
  IdKiosk.Texcoco,
  IdKiosk.Tlaxcala,
  IdKiosk.Tlahuac,
];

//REGEX
// Alphabets and Numbers with Characters ñ. _ - , / & #,
export const REGEX = {
  ADDRESS: '^([a-zA-ZÀ-ÿ0-9 ñ.,&#/_-]+)$',
  PHONE: '^(\\+\\d{1,2}\\s?)?[0-9]{10,12}$',
  ZIPCODE: '^(\\d{5})?$',
};

export const STATE_MX = [
  {
    display: 'Aguascalientes',
    value: 'Ags.',
  },
  {
    display: 'Baja California Norte',
    value: 'B.C.',
  },
  {
    display: 'Baja California Sur',
    value: 'B.C.S',
  },
  {
    display: 'Campeche',
    value: 'Camp.',
  },
  {
    display: 'Ciudad De México',
    value: 'CDMX',
  },
  {
    display: 'Chiapas',
    value: 'Chis.',
  },
  {
    display: 'Chihuahua',
    value: 'Chih.',
  },
  {
    display: 'Cohahuila',
    value: 'Coah.',
  },
  {
    display: 'Colima',
    value: 'Col.',
  },
  {
    display: 'Durango',
    value: 'Dgo.',
  },
  {
    display: 'Guanajuato',
    value: 'Gto.',
  },
  {
    display: 'Guerrero',
    value: 'Gro.',
  },
  {
    display: 'Hidalgo',
    value: 'Hgo.',
  },
  {
    display: 'Jalisco',
    value: 'Jal.',
  },
  {
    display: 'Estado de México',
    value: 'Méx.',
  },
  {
    display: 'Michocán',
    value: 'Mich.',
  },
  {
    display: 'Morelos',
    value: 'Mor.',
  },
  {
    display: 'Nayarit',
    value: 'Nay.',
  },
  {
    display: 'Nuevo León',
    value: 'N.L.',
  },
  {
    display: 'Oxaca',
    value: 'Oax.',
  },
  {
    display: 'Puebla',
    value: 'Pue.',
  },
  {
    display: 'Querétaro',
    value: 'Qro.',
  },
  {
    display: 'Quintana Roo',
    value: 'Q.R.',
  },
  {
    display: 'San Luis Potosí',
    value: 'S.L.P.',
  },
  {
    display: 'Sinaloa',
    value: 'Sin.',
  },
  {
    display: 'Sonora',
    value: 'Son.',
  },
  {
    display: 'Tabasco',
    value: 'Tab.',
  },
  {
    display: 'Tamaulipas',
    value: 'Tamps.',
  },
  {
    display: 'Tlaxcala',
    value: 'Tlax.',
  },
  {
    display: 'Veracruz',
    value: 'Ver.',
  },
  {
    display: 'Yucatán',
    value: 'Yuc.',
  },
  {
    display: 'Zacatecas',
    value: 'Zac.',
  },
];

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

// MULTI LANGUAGES
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/assets/icons/flags/ic_flag_en.svg',
  },
  {
    label: 'French',
    value: 'fr',
    systemValue: frFR,
    icon: '/assets/icons/flags/ic_flag_fr.svg',
  },
  {
    label: 'Vietnamese',
    value: 'vn',
    systemValue: viVN,
    icon: '/assets/icons/flags/ic_flag_vn.svg',
  },
  {
    label: 'Chinese',
    value: 'cn',
    systemValue: zhCN,
    icon: '/assets/icons/flags/ic_flag_cn.svg',
  },
  {
    label: 'Arabic (Sudan)',
    value: 'ar',
    systemValue: arSD,
    icon: '/assets/icons/flags/ic_flag_sa.svg',
  },
];

export const defaultLang = allLangs[0]; // English
