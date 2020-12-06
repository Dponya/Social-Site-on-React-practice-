import React, { Component } from 'react';

class ProfileStatus extends Component {

    state = {
        edit: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState(
            {
                status: e.currentTarget.value
            });

    }

    render() {
        return (
            <div>
                <div>
                    {
                        (!this.state.edit) ? <span onDoubleClick={this.editOn}>{this.state.status}</span>
                            : <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.editOff}
                                value={this.state.status}></input>
                    }
                </div>
            </div>
        )
    }
}
export default ProfileStatus;