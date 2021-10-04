import React, { Component } from 'react';
import authService from '../../../services/authService';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'
import { Flex, common_shadow, pop_reg, pop_thick, true_white, link_text, signIn, backgroundGradientGoogleBox, backgroundGradient } from '../utilities';
import { SmallInput, PrimaryButton } from '../elements';

class Login extends Component {
    state = { 
        email: '',
        pw: '',
    };

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    };
    
    handleSubmit = async (e) => {
        const { history, handleSignupOrLogin } = this.props;
        e.preventDefault();
        try {
          await authService.login(this.state);
          // Let <App> know a user has signed up!
          handleSignupOrLogin();
          history.push('/');
        } catch (err) {
          // Use a modal or toast in your apps instead of alert
          alert('Invalid Credentials!');
        }
    };

    render() { 
        const { email, pw } = this.state;
        return (
          <Main>
            <OutsideFlex>
              <TuxFlower
                src='/images/tuxFlower.png'
                alt='tux logo, a blue, yellow and red flower'
              ></TuxFlower>
              <LoginBox>
                <GoogleBox
                  className='loginLink'
                  // this is the "href" go to google
                  // href='http://localhost:3001/api/auth/google'
                  href='http://taketux.com/api/auth/google'
                  //   href="https://thecoop-tux.herokuapp.com/api/auth/google"
                >
                  <GoogleG
                    src='/images/GoogleG.png'
                    alt='The mutlicolor Google G'
                  />
                  <SignIn className='login'>Sign in with Google</SignIn>
                </GoogleBox>
                <form autoComplete='off' onSubmit={this.handleSubmit}>
                  <Text>or:</Text>
                  <Label for='email'>Username or Email</Label>
                  <SmallInput
                    type='text'
                    autoComplete='off'
                    id='email'
                    value={email}
                    name='email'
                    onChange={this.handleChange}
                  ></SmallInput>
                  <br />
                  <br />
                  <Label for='password'>Password</Label>
                  <SmallInput
                    type='password'
                    autoComplete='off'
                    id='password'
                    value={pw}
                    name='pw'
                    onChange={this.handleChange}
                  ></SmallInput>
                  <PrimaryButton
                    disabled={email.length > 0 && pw.length > 0 ? false : true}
                  >
                    Log In
                  </PrimaryButton>
                </form>
              </LoginBox>
            </OutsideFlex>
            <OutsideFlex signUp>
              <Text>Need an Account?&nbsp;</Text>
              <LinkTo to='/signup'>Sign Up</LinkTo>
            </OutsideFlex>
          </Main>
        );
    }
}
 
export default Login;

const Main = styled.main`
	background: ${backgroundGradient};
	background-blend-mode: normal, multiply;
	margin: 0;
    height: 100vh;
	/* max-width: 1440px; */
`;

const OutsideFlex = styled.article`
    ${Flex({jc:'center',ai:'center'})};

    ${(props) =>
    props.signUp && css`
      margin-top: 30px;
      padding-left: 550px;
    `}
`;

const TuxFlower = styled.img`
	width: 140px;
	z-index: 10;
    position: absolute;
    top: 150px;
	border-radius: 50%;
`;

const LoginBox = styled.div`
    ${Flex({fd:'column', ai:'center'})};
    width: 425px;
    height: 510px;
    background-color: ${true_white};
    box-shadow: ${common_shadow};
    border-radius: 10px;
    /* margin-top: 90px; */
    padding: 50px 0 0;
    // check figma file to refine this
`;

const GoogleG = styled.img`
    width: 35px;
    height: 35px;
    margin: 20px;
`;

const GoogleBox = styled.a`
    width: 343px;
    height: 80px;
    border-radius: 5px;
    background: ${backgroundGradientGoogleBox};
    ${Flex({jc:'center',ai:'center'})};
    margin-bottom: 10px;
    box-shadow: ${common_shadow};
    text-decoration: none;
    /* margin-top: 60px; */
`;

const SignIn = styled.p`
    font: 700 20px 'Roboto', sans-serif;
    /* line-height: 23.44px; */
    color: ${signIn};
    margin-top: 15px;
`;

const Text = styled.p`
    font: ${pop_reg};
    margin: 0;
`;

const Label = styled.label`
    font: ${pop_thick};

`;

const LinkTo = styled(Link)`
  color: ${link_text};
`;