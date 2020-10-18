import React, {useState} from 'react'
import M from "materialize-css/dist/js/materialize"

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({html: 'Please enter a first and last name'})
        }else {
            console.log(firstName, lastName)
            setFirstName('');
            setLastName('');
        }
    }

    return (
        <div id="tech-modal" className="modal">
            <div className="modal-content">
                <h4>Enter the new Tech</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="message" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="message" className="active">Last Name</label>
                    </div>
                </div>
                
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waver-effect waves-green btn" onClick={onSubmit} >Enter</a>
            </div>
        </div>
    )
}


export default AddTechModal;