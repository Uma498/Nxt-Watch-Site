import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import HomeVideoCard from '../HomeVideoCard'

import {
  VideosCardList,
  NoVideosViewContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosNote,
  RetryButton,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props

  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? 'e2e8f0' : '475569'

        return videosCount > 0 ? (
          <VideosCardList>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard key={eachVideo.id} video={eachVideo} />
            ))}
          </VideosCardList>
        ) : (
          <NoVideosViewContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosNote noteColor={noteColor}>
              Try different key words or remove search filter
            </NoVideosNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideos
