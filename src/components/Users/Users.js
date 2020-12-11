import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageCount);

    let portionSize = 10;
    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let pagesElements = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((l) => {
        return (
            <span onClick={() => props.pageChanged(l)}>{l} </span>
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
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            {pagesElements}
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
            {el}
        </div>
    )
}

export default Users;