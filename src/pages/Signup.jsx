import { MainSignContainer, FormComponentContainer } from "../styles/SignStyles";
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import NavigateTo from "../utils/NavigateTo";
import SignupForm from "../components/Form/SignupForm";

export default function Signup() {
    return (
        <MainSignContainer>
            <LogoIcon
                style={{ height: 100, cursor: 'pointer' }}
                width={180}
                onClick={NavigateTo('/')} />
            <FormComponentContainer>
                <SignupForm />
            </FormComponentContainer>
        </MainSignContainer>
    )
};