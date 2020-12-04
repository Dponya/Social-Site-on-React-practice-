import React from 'react';
import { NavLink } from 'react-router-dom';

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
                        {us.followed ? <button disabled={props.followingProgress.some(id => id === us.id)} onClick={() => {
                            props.unfollowThunkCreator(us)
                        }
                        }>Unfollow</button> :
                            <button disabled={props.followingProgress.some(id => id === us.id)} onClick={() => {
                                props.followThunkCreator(us)
                            }
                            }

                            >Follow</button>}
                    </div>
                </span>
                <span>
                    <NavLink to={'/profile/' + us.id}>{us.name}</NavLink>
                    <div>{us.status}</div>
                </span>
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