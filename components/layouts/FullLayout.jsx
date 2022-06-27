import React from 'react';

function FullLayout() {
    return (
        <div className="Layout">
        <div className="Content">
          {props.children}
        </div>
      </div>
    )
}

export default FullLayout;
