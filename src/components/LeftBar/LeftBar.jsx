import React, { Fragment } from 'react'
import { LeftBarView } from './LeftBarView.jsx'

export const LeftBar = () => {
  const links = [
    // { link: "/HomePage", heading: "HomePage" }
    ,{ link: "/UsersPanel", heading: "Users Panel" }
    ,{ link: "/ProductsPanel", heading: "Products Panel" }
  ]
  return (
    <Fragment>
      <div id="sidebar">
        <h1>Dashboard</h1>
        <nav>
          <ul>
            {links.map(x => <LeftBarView link={x.link} heading={x.heading} />)}
          </ul>
        </nav>
      </div>
    </Fragment>
  )
}
