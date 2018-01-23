import React from 'react';

const VideoThumbTile = props => (
  <div className="TileBorder">
    <div className="row">
      <div className="col-md-6">
        <img className="videoTileImage" src = {props.img} />
      </div>
      <div className="col-md-6">
        <p> {props.description} </p>
      </div>
    </div>
  </div>
);

export default VideoThumbTile;
