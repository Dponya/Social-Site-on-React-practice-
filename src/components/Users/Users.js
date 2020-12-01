import React from 'react';

const Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageCount);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let pagesElements = pages.map((l) => {
        return (
            <span onClick={() => props.pageChanged(l)}>{l}</span>
        )
    });

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
            {pagesElements}
            {el}
        </div>
    )
}

export default Users;