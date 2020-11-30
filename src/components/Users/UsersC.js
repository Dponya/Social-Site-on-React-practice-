import React, { Component } from 'react';
import * as axios from 'axios';

class UsersC extends Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUser(response.data.items))
    }
    render() {
        let el = this.props.users.map((us) => {
            return (
                <div key={us.id}>
                    <span>
                        <div>
                            <img />
                        </div>
                        <div>
                            {us.followed ? <button onClick={() => this.props.unfollow(us.id)}>Unfollow</button> :
                                <button onClick={() => this.props.follow(us.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{us.name}</div>
                        <div>{us.status}</div>
                    </span>
                    {/* <span>
                        <div>{us.city}</div>
                        <div>{us.country}</div>
                    </span> */}
                </div>
            )
        });

        return (
            <div>
                {el}
            </div>
        )
    }
}

export default UsersC;