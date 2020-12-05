/* import React, { Component } from 'react';

class ProfileStatus extends Component {

    state = {
        edit: false,
        status: 'foo bar'
    }

    editOn = () => {
        this.setState({
            edit: true
        })
    }

    editOff = () => {
        this.setState({
            edit: false
        })
    }

    render() {
        return (
            <div>
                <div>
                    {
                        (!this.state.edit) ? <span onDoubleClick={this.editOn}>{this.state.status}</span>
                            : <input autoFocus={true} onBlur={this.editOff} value={this.state.status}></input>
                    }
                </div>
            </div>
        )
    }
} */
let ProfileStatus = 1;
export default ProfileStatus;