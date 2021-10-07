import * as React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container mx-auto py-8 bg-green-500 sm:bg-blue-300 md:bg-red-500 ">
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
