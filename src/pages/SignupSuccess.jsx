import NavigateTo from "../utils/NavigateTo";
import { ReactComponent as LogoIcon } from '../assets/Logo.svg';
import { MainSignSuccessContainer } from '../styles/SignStyles';
import { Typography } from "@mui/material";
import AnimamtionContainer from "../components/SignAnimations/AnimationContainer";
import { useMediaQuery } from "@mui/material"

export default function SignupSuccess() {

  const mobileScreen = useMediaQuery('(max-width: 750px)');

  return (
    <>
      {mobileScreen ? (<MainSignSuccessContainer>
        <LogoIcon
          style={{ height: 100, cursor: 'pointer' }}
          width={180}
          onClick={NavigateTo('/')} />
        <div style={{ display: 'flex', flexFlow: 'column wrap', alignItems: 'center', justifyContent: 'center', width: '90%' }}>
          <Typography variant="h4" sx={{ fontWeight: 500, fontSize: 30, marginBottom: 4, textAlign: 'center' }}>
            Your account has been successfully created!
          </Typography>
          <Typography variant="body" sx={{ fontSize: '18px', textAlign: 'center' }}>
            Please check your mailbox to see more information about it. You are going to receive a confirmation account email.
          </Typography>
        </div>
        <AnimamtionContainer />
        <Typography variant="body">
          Return to <a href='/' style={{ textDecoration: 'none', color: '#1976d2' }}>Home</a>
        </Typography>
      </MainSignSuccessContainer>
      ) : (
        <MainSignSuccessContainer>
          <LogoIcon
            style={{ height: 100, cursor: 'pointer' }}
            width={180}
            onClick={NavigateTo('/')} />
          <Typography variant="h4" sx={{ fontWeight: 500, textAlign: 'center' }}>
            Your account has been successfully created!
          </Typography>
          <Typography variant="body" sx={{ fontSize: '20px', textAlign: 'center' }}>
            Please check your mailbox to see more information about it. You are going to receive a confirmation account email.
          </Typography>
          <AnimamtionContainer />
          <Typography variant="body">
            Return to <a href='/' style={{ textDecoration: 'none', color: '#1976d2' }}>Home</a>
          </Typography>
        </MainSignSuccessContainer>
      )}
    </>
  )
}