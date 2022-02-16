import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const GamingListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: none;

  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const GamingThumbNailImg = styled.img`
  width: 100%;
  height: 300px;
  align-self: center;

  align-self:center @media screen and (min-width: 768px) {
    width: 280px;
  }
`

export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`

export const GamingTitle = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-bottom: 0;
`

export const GamingViewsAndDate = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
