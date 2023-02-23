import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "../css/PostForm.css"
import { PostInList } from "./PostInList";

export interface IPostFormProps {
    addPost: Function
}
//modal should be in this file
export function PostForm(props: IPostFormProps){
    const [title, setTitle] = useState<string>('');
    const [thought, setThought] = useState<string>('');

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    function onSubmitForm(e:React.FormEvent<HTMLElement>){
        e.preventDefault();

        props.addPost({title: title, thought: thought});
    }
   
    return(
        <div>
            <Button color="danger" onClick={toggle}>
                New Thought
            </Button>
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered isOpen={modal} toggle={toggle}>
            <ModalBody>
            <form onSubmit={onSubmitForm}>
                <label>New Thought</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" />
                <label>Thought</label>
                <input onChange={(e) => setThought(e.target.value)} type="text" />
                <button type="submit"></button>
            </form>
            </ModalBody>
            </Modal>
            
        </div>
    )
}