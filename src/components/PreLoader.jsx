import React from "react";
import "./PreLoader.scss";
function PreLoader({text}) {
  return (
    <>
      <div className='pre-loader'>
        <div className='pre-loader__content'>

            <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default PreLoader;
