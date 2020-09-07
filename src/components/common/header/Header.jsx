import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import './Header.style.scss';
import logo from '../../../assets/logo.png';
import icons8 from '../../../assets/icons8.png';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { onMenuSelection } = props;
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">
          {' '}
          <img src={logo} alt="logo" style={{ width: '40px', height: '40px' }} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Menu
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem onClick={() => { onMenuSelection(0); }}>
                  Food Menu
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => { onMenuSelection(1); }}>
                  Serving Days
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Kitchen Name</NavbarText>
          <img className="right-img" src={icons8} alt="AH" />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
