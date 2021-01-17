import React, {useState} from 'react';
import {ReactComponent as Record} from "../../../icons/microphone.svg";
import {ReactComponent as Photo} from "../../../icons/image.svg";
import {ReactComponent as Smile} from "../../../icons/smiling.svg";
import DefaultModal from "../Commons/DefaultModal";

function PostAdder(props) {

    const [ID, setID] = useState(0);

    const increment = () => {
        setID(ID + 1);
    }

    const postCreationHandler = (e) => {
        console.log(e.target.value);
        props.setPostDescription(e.target.value);
    }

    const submitPostHandler = (e) => {
        e.preventDefault();
        props.setPosts([
            ...props.posts,
            {
                description: props.postDescription,
                ID: ID
            }
        ]);
        increment();
        props.setPostDescription("");
    }

    const modalStyle = {
        position: "absolute",
        width: "400px",
        backgroundColor: "transparent",
        padding: "4px 8px",
        top: "50%",
        left: "50%",
        outline: "none",
        transform: "translate(-55%, -55%)"
    }

    const modalButton = (
        <div className="post-adder-creator">
            What's on your mind?
        </div>
    )

    const modalBody = (
        <div className="create-post-container">
            <div className="create-post-title">
                Create Post
            </div>
            <div className="create-post-subtitle">
                <div>{props.picture}</div>
                <div>{props.name}</div>
            </div>
            <div className="create-post-input">
                <form>
                    <textarea onChange={postCreationHandler} placeholder={"What's on your mind?"}/>
                    <div className="create-post-extras">
                        Add photo
                        <ul>
                            <li>
                                <Photo/>
                            </li>
                        </ul>
                    </div>
                    <button type="submit" onClick={submitPostHandler}>Post</button>
                </form>
            </div>

        </div>
    );

    return (
        <div className="post-adder-container">
            <div className="post-adder-top">
                <div className="post-profile-pic">
                    {props.picture}
                </div>
                <DefaultModal
                    style={modalStyle}
                    button={modalButton}
                    content={modalBody}
                />
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