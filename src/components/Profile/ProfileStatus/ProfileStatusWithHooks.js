import { useState } from "react"

export const ProfileStatus = (props) => {

    let [edit, setEdit] = useState(false);
    let [status, setStatus] = useState(props.status)

    const editOn = () => {
        setEdit(true);
    }

    const editOff = () => {
        setEdit(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                {
                    (!edit) ? <span onDoubleClick={editOn}>{status}</span>
                        : <input autoFocus={true} onChange={onStatusChange} onBlur={editOff}
                            value={status}></input>
                }
            </div>
        </div>
    )
}