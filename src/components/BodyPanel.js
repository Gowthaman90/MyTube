import React from "react";
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import VideoInfo from './VideoInfo';

const BodyPanel = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-12">
            <VideoPlayer />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <VideoInfo />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <VideoList />
      </div>
    </div>
  </div>
)

export default BodyPanel;
