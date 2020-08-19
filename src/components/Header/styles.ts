import styled, { css } from 'styled-components';
import { IoIosArrowRoundForward, 
         IoMdNotificationsOutline} from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { RiListSettingsLine, RiSearchLine } from 'react-icons/ri';

export const Container = styled.nav`
  max-width: 100%;
  height: var(--nav-size);
  display: flex;
  align-items: center;
  background: var(--card-background);
`;

export const Logo = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--card-background);
  padding: 2rem;
  border-right: 1px solid var(--background);

  > img { 
    height: 2rem;
   }

`;

export const HeaderItems = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;

    > p {
      font-size: 1.2rem;
    }
  }

  > div + div {
    width: 420px;
  }
`;

export const iconsCSS = css` 
  height: 1.5rem;
  width: 1.5rem;
  fill: var(--primary);
  flex-shrink: 0;

  :hover {
    filter: brightness(1.8);
  }
`; 

export const Settings = styled(RiListSettingsLine)`
  ${iconsCSS}

`; 

export const Arrow = styled(IoIosArrowRoundForward)`
  ${iconsCSS}
`; 

export const Search = styled.form`
  position: relative;

  > input {
    width: 14rem;
    height: 2.2rem;
    border-radius: 9999px;
    background-color: var(--search-input-bg);
  } 

`;

export const BellIcon = styled(IoMdNotificationsOutline)`
  ${iconsCSS}
  position: relative;
`;


export const SearchIcon = styled(RiSearchLine)`
  ${iconsCSS}

  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  margin-right: 0.75rem;
  right: 0;
  fill: var(--primary);
`;

export const AvatarIcon = styled(FaUserCircle)`
  ${iconsCSS}
  width: 2.5rem;
  height: 2.5rem;

`;

export const Avatar = styled.img`
  width: 3rem;
  border-radius: 50%;
  background: var(--primary)             
`;

