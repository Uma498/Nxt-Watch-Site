import {Link} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ListItem,
  ThumbNailImg,
  VideoDetails,
  ProfileImg,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

import './index.css'

const HomeVideoCard = props => {
  const {video} = props

  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImgUrl,
  } = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItem>
              <ThumbNailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImg src={profileImgUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} views<Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
