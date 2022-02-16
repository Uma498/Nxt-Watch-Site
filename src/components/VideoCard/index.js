import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  TrendingListItem,
  TrendingThumbnailImg,
  TrendingVideoDetails,
  TrendingProfileImg,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImgUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/videos/${id}`}>
            <TrendingListItem>
              <TrendingThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendingVideoDetails>
                <TrendingProfileImg src={profileImgUrl} alt="channel logo" />
                <TrendingContentSection>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                  <TrendingChannelName color={textColor}>
                    {name}
                  </TrendingChannelName>
                  <TrendingViewsAndDate color={textColor}>
                    {viewCount} views <TrendingDot> &#8226; </TrendingDot>{' '}
                    {publishedAt}
                  </TrendingViewsAndDate>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCard
