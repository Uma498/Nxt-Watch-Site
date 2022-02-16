import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0;
  margin-top: 0px;
`

export const NavigationLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  width: 240px;
  position: fixed;
  top: 60px;
  background-color: ${props => props.bgColor};

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => props.bgColor};
`

export const NavText = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-left: 14px;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`

export const ContactHeading = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => props.color};
`

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`

export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`

export const ContactNote = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const NavigationSmallContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center
  height: 60px;
  width: 100%;
  position: fixed;
  margin-bottom: 0px;
  background-color: ${props => props.bgColor};

  @media screen and (min-width: 768px) {
    display: none;
  }
`
