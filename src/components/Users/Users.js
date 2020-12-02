import React from 'react';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
                        {us.followed ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${us.id}`,
                                {
                                    withCredentials: true,
                                    headers: { 'API-KEY': '7736f2b8-8747-41df-9853-4cdc5388e2d9' }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(us.id)
                                    }
                                });
                        }
                        }>Unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${us.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: { 'API-KEY': '7736f2b8-8747-41df-9853-4cdc5388e2d9' }
                                    }
                                ).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(us.id)
                                    }
                                });
                            }
                            }

                            >Follow</button>}
                    </div>
                </span>
                <span>
                    <NavLink to={'/profile/' + us.id}>{us.name}</NavLink>
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