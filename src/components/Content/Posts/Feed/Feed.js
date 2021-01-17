import React from 'react';
import Post from "./Post";

function Feed(props){
    return(
      <div>
          {props.posts.map( post => (
              <Post
                  description={post.description}
                  profilePicture={props.profilePicture}
                  postOwner={props.postOwner}
                  timestamp={props.timestamp}
              />
          ))}
      </div>
    );
}

export default Feed;