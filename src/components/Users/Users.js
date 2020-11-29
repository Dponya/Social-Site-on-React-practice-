import React from 'react';

const Users = (props) => {
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
                <span>
                    <div>{us.city}</div>
                    <div>{us.country}</div>
                </span>
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