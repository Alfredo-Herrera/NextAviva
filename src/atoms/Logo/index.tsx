// @mui
import { Box, BoxProps } from '@mui/material';
import Link from 'next/link';
// import logo from '../../public/logo/logo_single.svg';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
}

export default function Logo({ disabledLink = false, sx }: Props) {
  const logo = (
    <Box
      component="img"
      src="/logo/AvivaLogoWithoutCreditWord.svg"
      sx={{ width: 100, height: 100, objectFit: 'contain', ...sx }}
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <Link href="/">{logo}</Link>;
}
