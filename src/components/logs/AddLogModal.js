import React, {useState} from 'react'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addLogs} from "../actions/logActions";
import M from "materialize-css/dist/js/materialize"

const AddLogModal = ({addLogs}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({html: 'Please enter a message and tech'})
        }else {

            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }

            addLogs(newLog)

            M.toast({html: `Log add by ${tech}`})
            
            setMessage('');
            setAttention(false);
            setTech('');
        }
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value='' disabled>Select Technician</option>
                            <option value="Amalia Rojas">Amalia Rojas</option>
                            <option value="Rojelio Rojas">Rojelio Rojas</option>
                            <option value="Rocio Rojas">Rocio Rojas</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" value={attention} checked={attention} className="filled-in" onChange={e => setAttention(!attention)} />
                                <span>Needs Atttention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waver-effect waves-green btn" onClick={onSubmit} >Enter</a>
            </div>
        </div>
    )
}

AddLogModal.prototype = {
    addLogs: PropTypes.func.isRequired,
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default connect(null, {addLogs})(AddLogModal);
