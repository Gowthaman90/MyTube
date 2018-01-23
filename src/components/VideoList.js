import React from 'react';
import VideoThumbTile from './VideoThumbTile';

var videoList = [
  {desc:'my img 1',image:'https://i.ytimg.com/vi/1rkLK6ypvJc/maxresdefault.jpg'},
  {desc:'my img 2',image:'https://i.ytimg.com/vi/EYOchmOtDYU/maxresdefault.jpg'},
  {desc:'my img 3',image:'https://i.ytimg.com/vi/tt8zIb2R8ZQ/maxresdefault.jpg'},
  {desc:'my img 4',image:'https://i.ytimg.com/vi/1rkLK6ypvJc/maxresdefault.jpg'},
  {desc:'my img 5',image:'https://i.ytimg.com/vi/EYOchmOtDYU/maxresdefault.jpg'},
  {desc:'my img 6',image:'https://i.ytimg.com/vi/tt8zIb2R8ZQ/maxresdefault.jpg'},
  {desc:'my img 4',image:'https://i.ytimg.com/vi/1rkLK6ypvJc/maxresdefault.jpg'},
  {desc:'my img 5',image:'https://i.ytimg.com/vi/EYOchmOtDYU/maxresdefault.jpg'},
  {desc:'my img 6',image:'https://i.ytimg.com/vi/tt8zIb2R8ZQ/maxresdefault.jpg'}
];

const VideoList = () => (
  <div>
    <ul  className="videoListPalet">
     {videoList.map(data =>
         // console.log(element);
         <VideoThumbTile description={data.desc} img={data.image} />
      )}
    </ul>
  </div>
)

export default VideoList;
