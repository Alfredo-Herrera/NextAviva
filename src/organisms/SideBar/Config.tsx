// components
import CallIcon from '@mui/icons-material/Call';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import DuoIcon from '@mui/icons-material/Duo';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Science from '@mui/icons-material/Science';
import SettingsPhone from '@mui/icons-material/SettingsPhone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TaskOutlineIcon from '@mui/icons-material/Task';
import TaskAlt from '@mui/icons-material/TaskAlt';

// ----------------------------------------------------------------------

const ICONS = {
  customer: <PersonOutlineIcon>Filled</PersonOutlineIcon>,
  selfChecIn: <ContactEmergencyIcon />,
  call: <CallIcon />,
  kioskManager: <DuoIcon>Filled</DuoIcon>,
  operator: <SupportAgentIcon>Filled</SupportAgentIcon>,
  script: <TaskOutlineIcon>Filled</TaskOutlineIcon>,
  callSession: <SettingsPhone>Filled</SettingsPhone>,
  approvedCredit: <TaskAlt>Filled</TaskAlt>,
  science: <Science>Filled</Science>,
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Menu',
    items: [
      {
        title: 'Cliente',
        roles: ['kiosks'],
        path: '/dashboard/customer',
        icon: ICONS.customer,
      },
      {
        title: 'Estado llamadas',
        roles: ['kiosks'],
        path: '/dashboard/kioskManager',
        icon: ICONS.kioskManager,
      },
      {
        title: 'Pre Registro',
        roles: ['kiosks'],
        path: '/dashboard/selfCheckIn',
        icon: ICONS.call,
      },
      {
        title: 'Iniciar Llamada',
        roles: ['kiosks'],
        path: '/dashboard/interview',
        icon: ICONS.selfChecIn,
      },
      {
        title: 'Operador',
        roles: ['Agents'],
        path: '/dashboard/operator',
        icon: ICONS.operator,
      },
      {
        title: 'Sesión de llamadas',
        roles: ['Agents'],
        path: '/dashboard/CallSession',
        icon: ICONS.callSession,
      },
      {
        title: 'Script',
        roles: ['Agents'],
        path: '/dashboard/script',
        icon: ICONS.script,
      },
      // { title: 'Crédito aprobado', roles: ['Agents'], path: '/dashboard/ApprovedCredit', icon: ICONS.approvedCredit },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     {
  //       title: 'user',
  //       path: '/dashboard/user',
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'Four', path: '/dashboard/user/four' },
  //         { title: 'Five', path: '/dashboard/user/five' },
  //         { title: 'Six', path: '/dashboard/user/six' },
  //       ],
  //     },
  //   ],
  // },
];

export default navConfig;
