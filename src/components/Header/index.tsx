import React from 'react';
import { Container, 
         Logo,
         HeaderItems,
         Search,
         Avatar,
         Settings,
         Arrow,
         BellIcon,
         SearchIcon,
         AvatarIcon } from './styles';
import { Link } from 'react-router-dom';

import LogoImage from '../../assets/img/logo/logo_blue.png';
import InputElement from '../Input';

interface HeaderProps {
  name: string;
  avatarUrl?: string;
  company?: string;
  insurance?: string;
}

const Header: React.FC<HeaderProps> = ( {
  name,
  avatarUrl,
  company,
  insurance,
}) => {
  return (
    <Container>
      <Link to="dashboard">
          <Logo>
            <img src={ LogoImage } alt="HealthBit"/>
          </Logo>
      </Link>
      <HeaderItems>
        <div>
          <p>{company}</p>
          <Arrow/>
          <p>{insurance}</p>
        </div>
        <div>
        <Search>
          <InputElement
            type={'text'}
            placeholder={'Buscar...'}
            />
          <SearchIcon/>
        </Search>
        <Settings/>
          <BellIcon/>
          {avatarUrl ? <Avatar src={avatarUrl} alt={name}/> : <AvatarIcon/>}
        </div>
      </HeaderItems>
    </Container>
  );
}

export default Header;