

import {
  HeaderContainer,
  NavContainer,
  NavLinkPage
} from './AppBar.style';

export const AppBar = () => {

  return (
    <HeaderContainer>
   

   
      <NavContainer>
        <NavLinkPage to="/">Events</NavLinkPage>
        <NavLinkPage to="/signup">Signup</NavLinkPage>
      </NavContainer>


  
    </HeaderContainer>
  );
};
