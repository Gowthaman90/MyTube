import React from 'react';
import StatelessComponent from './StatelessComponent';
import VideoSearch from './VideoSearch';

const Header = () => (
  <div className="appHeader">
    <div className="row">
      <div className="col-md-2">
        <StatelessComponent title="MyTube" content="Content" />
      </div>
      <div className="col-md-4">
        <VideoSearch />
      </div>
    </div>
  </div>
)

export default Header;
