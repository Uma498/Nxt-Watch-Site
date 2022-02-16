import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: none;

  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const ThumbNailImg = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const ProfileImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 20px;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`

export const Title = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const ChannelName = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const ViewsAndDate = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const Dot = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding-left: 6px;
  padding-right: 6px;
`
