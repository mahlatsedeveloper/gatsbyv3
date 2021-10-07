import * as React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container mx-auto py-8">
        {children}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
