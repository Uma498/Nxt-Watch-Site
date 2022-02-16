import Header from '../Header'
import NavigationBar from '../NavigationBar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const textColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notFoundImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />

          <NotFoundContainer bgColor={bgColor}>
            <NotFoundVideosView>
              <NotFoundImg src={notFoundImgUrl} alt="not found" />
              <NotFoundHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription textColor={textColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundVideosView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
