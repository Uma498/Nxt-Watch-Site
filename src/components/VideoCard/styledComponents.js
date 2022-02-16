import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const TrendingListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: none;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 40px;
  }
`

export const TrendingThumbnailImg = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const TrendingProfileImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 20px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const TrendingTitle = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const TrendingChannelName = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const TrendingViewsAndDate = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const TrendingDot = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding-left: 6px;
  padding-right: 6px;
`
