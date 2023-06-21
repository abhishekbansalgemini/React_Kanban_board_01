import React, { useState } from 'react'
import './Editable_Card.css'
import Modal from 'react-modal';

function Editable_Card(props) {
    const [showEdit, setShowEdit] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [Task, setTask] = useState("");

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function submitDetails(event) {
        event.preventDefault();
        if (props.onSubmit) props.onSubmit(inputValue, description, startDate, endDate, assignee, Task)
        setShowEdit(false);
        setInputValue("");
        setDescription("");
        closeModal();
    }
    return (<>
        <p className={`editable_display ${props.displayClass || ""}`} onClick={openModal}>{props.text || "Add Card"}</p>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >

            <div className='editable'>
                <form className={`editable_edit ${""}`} onSubmit={submitDetails}>
                    <h2 className='card-head' ref={(_subtitle) => (subtitle = _subtitle)}>Card Details</h2>

                   <div className='data-input'> <label>Card Name :</label>
                    <input type="text" placeholder={props.placeholder || "Enter Item"} autoFocus value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}  required /></div>

                        <div className='data-input'> <label>Tasks :</label>
                    <input type="text" placeholder="Enter Tasks" autoFocus value={Task}
                        onChange={(e) => setTask(e.target.value)}  required />   </div> 

                       <div className='data-input'>  <label>Start Date :</label>
                    <input type="date" placeholder="Enter Start Date" autoFocus value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}  required/> </div>

                       <div className='data-input'> <label >End Date :</label>
                    <input type="date" placeholder="Enter End Date" autoFocus value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}  required />   </div>   

                      <div className='data-input'>   <label>Assignee :</label>
                    <input type="text" placeholder="Enter Assignee Name" autoFocus value={assignee}
                        onChange={(e) => setAssignee(e.target.value)}  required />   </div>   

                       <div className='data-input'>  <label>Description :</label>
                    <textarea type="text" placeholder={"Enter Card Description"} value={description}
                        onChange={(e) => setDescription(e.target.value)}  required /></div>



                    <div className="editable_edit_footer">
                        <button className='btn btn-info' type='submit'>{props.buttonText || "Add"}</button>
                        <button className='btn btn-secondary' onClick={closeModal}>close</button>
                    </div>



                </form>
            </div>

        </Modal>
    </>

    )
}

export default Editable_Card