import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
// import logo from './logo.png.link';
import Container from './container'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    // <img src={logo} alt="logo" />

    return (
      <Container>
        <Navigation />
        {children}
      </Container>
    )
  }
}

export default Template
