import React from 'react';
import * as axios from 'axios';

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUser(response.data.items))

    }

    let el = props.users.map((us) => {
        return (
            <div key={us.id}>
                <span>
                    <div>
                        <img />
                    </div>
                    <div>
                        {us.followed ? <button onClick={() => props.unfollow(us.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(us.id)}>Follow</button>}
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

export default Users;