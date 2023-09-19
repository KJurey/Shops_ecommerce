import { FormComponentContainer, MainSignContainer } from "../styles/SignStyles";
import Form from "../components/Form/Form";
import { ReactComponent as LogoIcon } from '../assets/Logo.svg';
import NavigateTo from "../utils/NavigateTo";
import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material"

export default function Signin() {

  const mobileScreen = useMediaQuery('(max-width: 750px)');

  return (
    <>
      {mobileScreen ? (<MainSignContainer>
        <LogoIcon
          style={{ height: 100, cursor: 'pointer' }}
          width={180}
          onClick={NavigateTo('/')} />
        <FormComponentContainer>
          <Form />
        </FormComponentContainer>
        <div style={{ margin: '13px 0' }}>
          <h4 style={{
            borderBottom: '1.5px solid #e5e2e1',
            lineHeight: '0.1em',
            textAlign: 'center',
            minWidth: '300px'
          }}
          >
            <span style={{
              background: '#fffcfa',
              padding: '0 10px',
              fontWeight: 100,
            }}
            >
              Ready to join?
            </span>
          </h4>
        </div>
        <div style={{ minWidth: '310px' }}>
          <Button
            variant="outlined" style={{ width: '100%' }} onClick={NavigateTo('/signup')}>Create your Shops Account</Button>
        </div>
      </MainSignContainer>
      ) : (
        <MainSignContainer>
          <LogoIcon
            style={{ height: 100, cursor: 'pointer' }}
            width={180}
            onClick={NavigateTo('/')} />
          <FormComponentContainer>
            <Form />
          </FormComponentContainer>
          <div style={{ margin: '13px 0' }}>
            <h4 style={{
              borderBottom: '1.5px solid #e5e2e1',
              lineHeight: '0.1em',
              textAlign: 'center',
              minWidth: '500px'
            }}
            >
              <span style={{
                background: '#fffcfa',
                padding: '0 10px',
                fontWeight: 100,
              }}
              >
                Ready to join?
              </span>
            </h4>
          </div>
          <div style={{ minWidth: '550px' }}>
            <Button
              variant="outlined" style={{ width: '100%' }} onClick={NavigateTo('/signup')}>Create your Shops Account</Button>
          </div>
        </MainSignContainer>
      )}
    </>
  )
}; 