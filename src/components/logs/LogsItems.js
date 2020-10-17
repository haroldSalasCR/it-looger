import React from 'react'
import PropType from "prop-types";

const LogsItems = ({log}) => {
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span> last update by {' '}
                    <span className="black-text">{log.tech}</span> on {' '}
                    <span className="black-text">{log.date}</span>
                </span>
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>         
        </li>
    )
}

LogsItems.prototype = {
     log: PropType.object.isRequired
}

export default LogsItems
