import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export type ColorSchema =
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';

interface GradientsPaletteOptions {
    primary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
}

interface ChartPaletteOptions {
    violet: string[];
    blue: string[];
    green: string[];
    yellow: string[];
    red: string[];
}

declare module '@mui/material/styles/createPalette' {
    interface TypeBackground {
        neutral: string;
    }
    interface SimplePaletteColorOptions {
        lighter: string;
        darker: string;
    }
    interface PaletteColor {
        lighter: string;
        darker: string;
    }
    interface Palette {
        gradients: GradientsPaletteOptions;
        chart: ChartPaletteOptions;
    }
    interface PaletteOptions {
        gradients: GradientsPaletteOptions;
        chart: ChartPaletteOptions;
    }
}

declare module '@mui/material' {
    interface Color {
        0: string;
        500_8: string;
        500_12: string;
        500_16: string;
        500_24: string;
        500_32: string;
        500_48: string;
        500_56: string;
        500_80: string;
    }
}

const light = {
    primary: {
        lighter: '#C9F6ED',
        light: '#5BCAC6',
        main: '#074750',
        dark: '#032A39',
        darker: '#011626',
    },
    secondary: {
        lighter: '#D2FCD8',
        light: '#78F09F',
        main: '#23CD7D',
        dark: '#119370',
        darker: '#06625B',
    },
    info: {
        lighter: '#C7F8F9',
        light: '#59C9E0',
        main: '#006B99',
        dark: '#003E6E',
        darker: '#001F49',
    },
    success: {
        lighter: '#D7F8CE',
        light: '#6ED66B',
        main: '#147724',
        dark: '#0A5524',
        darker: '#033920',
    },
    warning: {
        lighter: '#FBF2C9',
        light: '#ECCA5E',
        main: '#C18700',
        dark: '#8A5800',
        darker: '#5C3500',
    },
    error: {
        lighter: '#FAE1D3',
        light: '#E28C78',
        main: '#A02523',
        dark: '#731120',
        darker: '#4C061D',
    },
};

const dark = {
    primary: {
        lighter: '#D2FCD8',
        light: '#78F09F',
        main: '#23CD7D',
        dark: '#119370',
        darker: '#06625B',
    },
    secondary: {
        lighter: '#C9F6ED',
        light: '#5BCAC6',
        main: '#074750',
        dark: '#032A39',
        darker: '#011626',
    },
    info: {
        lighter: '#D5DFFF',
        light: '#829BFF',
        main: '#3052FF',
        dark: '#182CB7',
        darker: '#09147A',
    },
    success: {
        lighter: '#F1FCCF',
        light: '#C3ED6E',
        main: '#7DC615',
        dark: '#4D8E0A',
        darker: '#2A5F04',
    },
    warning: {
        lighter: '#FFF9CD',
        light: '#FFE969',
        main: '#FFD105',
        dark: '#B78F02',
        darker: '#7A5A00',
    },
    error: {
        lighter: '#FFE6D9',
        light: '#FFA18D',
        main: '#FF4242',
        dark: '#B7213B',
        darker: '#7A0C32',
    },
};

const GREY = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24',
    500_8: alpha('#919EAB', 0.08),
    500_12: alpha('#919EAB', 0.12),
    500_16: alpha('#919EAB', 0.16),
    500_24: alpha('#919EAB', 0.24),
    500_32: alpha('#919EAB', 0.32),
    500_48: alpha('#919EAB', 0.48),
    500_56: alpha('#919EAB', 0.56),
    500_80: alpha('#919EAB', 0.8),
};

const GRADIENTS_LIGTH = {
    primary: createGradient(light.primary.light, light.primary.main),
    info: createGradient(light.info.light, light.info.main),
    success: createGradient(light.success.light, light.success.main),
    warning: createGradient(light.warning.light, light.warning.main),
    error: createGradient(light.error.light, light.error.main),
};

const GRADIENTS_DARK = {
    primary: createGradient(dark.primary.light, dark.primary.main),
    info: createGradient(dark.info.light, dark.info.main),
    success: createGradient(dark.success.light, dark.success.main),
    warning: createGradient(dark.warning.light, dark.warning.main),
    error: createGradient(dark.error.light, dark.error.main),
};

const CHART_COLORS = {
    violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
    blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
    green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
    yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
    red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON_LIGTH = {
    common: { black: '#000', white: '#fff' },
    primary: { ...light.primary, contrastText: '#fff' },
    secondary: { ...light.secondary, contrastText: '#fff' },
    info: { ...light.info, contrastText: '#fff' },
    success: { ...light.success, contrastText: GREY[800] },
    warning: { ...light.warning, contrastText: GREY[800] },
    error: { ...light.error, contrastText: '#fff' },
    grey: GREY,
    gradients: GRADIENTS_LIGTH,
    chart: CHART_COLORS,
    divider: GREY[500_24],
    action: {
        hover: GREY[500_8],
        selected: GREY[500_16],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focus: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};

const COMMON_DARK = {
    common: { black: '#000', white: '#fff' },
    primary: { ...dark.primary, contrastText: '#fff' },
    secondary: { ...dark.secondary, contrastText: '#fff' },
    info: { ...dark.info, contrastText: '#fff' },
    success: { ...dark.success, contrastText: GREY[800] },
    warning: { ...dark.warning, contrastText: GREY[800] },
    error: { ...dark.error, contrastText: '#fff' },
    grey: GREY,
    gradients: GRADIENTS_DARK,
    chart: CHART_COLORS,
    divider: GREY[500_24],
    action: {
        hover: GREY[500_8],
        selected: GREY[500_16],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focus: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};

const palette = {
    light: {
        ...COMMON_LIGTH,
        mode: 'light',
        text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
        background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
        action: { active: GREY[600], ...COMMON_LIGTH.action },
    },
    dark: {
        ...COMMON_DARK,
        mode: 'dark',
        text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
        background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: GREY[500_16],
        },
        action: { active: GREY[500], ...COMMON_DARK.action },
    },
} as const;

export default palette;
