import React from 'react';

const Layout = (props) => {
  return (
    <div className="Layout">
      <div className="Content">
        {props.children}
      </div>
    </div>
  )
}

export default Layout;
