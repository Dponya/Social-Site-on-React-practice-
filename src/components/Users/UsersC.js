import React, { Component } from 'react';
import * as axios from 'axios';

class UsersC extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=5`) //?page=1&count=5
            .then(response => {
                this.props.setUser(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });

    }

    pageChanged = (pageCount) => {
        this.props.setPageCounter(pageCount)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageCount}&count=5`)
            .then(response => {
                this.props.setUser(response.data.items);
            });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageCount);

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        let pagesElements = pages.map((l) => {
            return (
                <span onClick={() => this.pageChanged(l)}>{l}</span>
            )
        });

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
                {pagesElements}
                {el}
            </div>
        )
    }
}

export default UsersC;