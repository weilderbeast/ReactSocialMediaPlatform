import React from 'react';
import Modal from "@material-ui/core/Modal";

function DefaultModal(props){

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const body = (
        <div style={props.style}>
            {props.content}
            <DefaultModal/>
        </div>
    );

    return(
        <div style={{width: "100%"}}>
            <div onClick={handleOpen} style={{width: "100%"}}>{props.button}</div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-label={props.title}
                aria-describedby={props.description}
            >
                {body}
            </Modal>
        </div>

    );
}

export default DefaultModal;
