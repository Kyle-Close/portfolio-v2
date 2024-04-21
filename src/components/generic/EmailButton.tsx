import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const EmailButton = () => {
  const handleEmailClick = () => {
    const emailLink = 'mailto:k.james.close@gmail.com';
    window.open(emailLink, '_blank');
  };

  return (
    <IconButton onClick={handleEmailClick}>
      <EmailIcon />
    </IconButton>
  );
};

export default EmailButton;
