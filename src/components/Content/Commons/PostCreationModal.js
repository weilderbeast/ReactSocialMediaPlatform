import React, {useState} from 'react';
import Modal from "@material-ui/core/Modal";
import {ReactComponent as Photo} from "../../../icons/image.svg";

function PostCreationModal(props) {

    const [open, setOpen] = React.useState(false);
    const [enabled, setEnabled] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
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

    const finishPost = (e) => {
        props.submitPostHandler(e);
        handleClose();
    }

    const verifyInput = (e) => {
        props.postCreationHandler(e);
        if (e.target.value === null || e.target.value === undefined || e.target.value === "")
            setEnabled(false);
        else setEnabled(true);
    }

    const body = (
        <div style={modalStyle}>
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
                        <textarea onChange={verifyInput} placeholder={"What's on your mind?"}/>
                        <div className="create-post-extras">
                            Add photo
                            <ul>
                                <li>
                                    <div>
                                        <label htmlFor={"#id"}>
                                            <Photo/>
                                        </label>
                                        <input type="file"
                                               accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv"
                                               onChange={props.postImageHandler}
                                               className="custom-input"
                                               placeholder="nothing"
                                               style={{display: "none"}}
                                               id="#id"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button type="submit" disabled={!enabled} onClick={finishPost}>Post</button>
                    </form>
                </div>
            </div>
            <PostCreationModal/>
        </div>
    );

    return (
        <div style={{width: "100%"}}>
            <div onClick={handleOpen} style={{width: "100%"}}>
                <div className="post-adder-creator">
                    <p>What's on your mind? </p>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                {body}
            </Modal>
        </div>

    );
}

export default PostCreationModal;
