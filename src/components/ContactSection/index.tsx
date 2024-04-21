import { Box, IconButton, Typography } from '@mui/material';

import EmailButton from '../generic/EmailButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ContactSection() {
  return (
    <Box id='contact' sx={titleContainer}>
      <Typography variant='h3'>Contact</Typography>
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <IconButton
          href='https://www.linkedin.com/in/kyle-close/'
          target='_blank'
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton href='https://github.com/Kyle-Close' target='_blank'>
          <GitHubIcon />
        </IconButton>
        <EmailButton />
      </Box>
    </Box>
  );
}

const titleContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  my: '1rem',
};

const linkedinButton = {
  width: '35px',
};

const githubButton = {
  width: '25px',
};

export default ContactSection;
