import React, {useState} from 'react';
import {ReactComponent as Like} from "../../../../icons/like.svg";
import {ReactComponent as Comment} from "../../../../icons/chat.svg";
import {ReactComponent as Share} from "../../../../icons/share.svg";
import {ReactComponent as Emoji} from "../../../../icons/smiling.svg";
import {ReactComponent as Camera} from "../../../../icons/camera.svg";
import {ReactComponent as GIF} from "../../../../icons/gif.svg";
import {ReactComponent as Sticker} from "../../../../icons/sticker.svg";

function Post(props) {
    const [count, setCount] = useState(0);

    let img;

    if(props.image === "" || props.image === undefined){
        img=  <img/>;
    } else {
        img =<img src={props.image} alt="photo" id="#id"/>;
    }

    return (
        <div className="post-container">
            <div className="post-top">
                <div className="post-profile-pic">
                    {props.profilePicture}
                </div>
                <div className="post-top-content">
                    <div className="post-top-content-left">
                        <div className="post-top-content-owner">
                            <span>{props.postOwner}</span>
                        </div>
                        <div className="post-top-content-timestamp">
                            <span>{props.timestamp}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post-description">
                <p>{props.description}</p>
            </div>
            <div className="post-content">
                {img}
            </div>
            <div className="post-bottom">
                <div className="post-bottom-shared">

                </div>
                <div className="post-bottom-interact">
                    <Like/>
                    <span>{count}</span>
                </div>
                <div className="post-bottom-reactions">
                    <div className="post-bottom-reactions-icon" onClick={() => {
                        setCount(count + 1);
                    }}>
                        <Like/>
                        <span>Like</span>
                    </div>
                    <div className="post-bottom-reactions-icon">
                        <Comment/>
                        <span>Comment</span>
                    </div>
                    <div className="post-bottom-reactions-icon">
                        <Share/>
                        <span>Share</span>
                    </div>
                </div>
                <div className="post-bottom-comment">
                    <div className="post-profile-pic">
                        {props.profilePicture}
                    </div>
                    <form>
                        <input placeholder="Say something"/>
                        <ul className="post-bottom-ul">
                            <li className="post-bottom-ul-item">
                                <Emoji/>
                            </li>
                            <li className="post-bottom-ul-item">
                                <Camera/>
                            </li>
                            <li className="post-bottom-ul-item">
                                <GIF/>
                            </li>
                            <li className="post-bottom-ul-item">
                                <Sticker/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Post;