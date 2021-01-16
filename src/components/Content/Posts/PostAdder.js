import React from 'react';
import {ReactComponent as Record} from "../../../icons/microphone.svg";
import {ReactComponent as Photo} from "../../../icons/image.svg";
import {ReactComponent as Smile} from "../../../icons/smiling.svg";

function PostAdder(props) {
    return (
        <div className="post-adder-container">
            <div className="post-adder-top">
                <div className="post-profile-pic">
                    {props.children}
                </div>
                <form>
                    <input placeholder={"What's on your mind?"}/>
                </form>
            </div>
            <div className="post-adder-bottom">
                <a href="#" className="post-adder-link">
                    <div className="post-adder-icon">
                        <Record/>
                        Go live
                    </div>
                </a>
                <a href="#" className="post-adder-link">
                    <div className="post-adder-icon">
                        <Photo/>
                        Gallery
                    </div>
                </a>
                <a href="#" className="post-adder-link">
                    <div className="post-adder-icon">
                        <Smile/>
                        Feeling/Activity
                    </div>
                </a>
            </div>
        </div>
    );
}

export default PostAdder;