import React, { Component } from 'react';
import api from '../../services/api';


import ArrowBack from '../../components/ArrowBack';

import './Details.css';

export default class Details extends Component {
    state = {
        user: {}
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/users/${id}`);

        this.setState({ user: response.data })
    }

    render (){
        const { user } = this.state;

        return (
            <div className="UserInfo">
                <ArrowBack />

                <h3>Usuário</h3>
                <p>{user.name}</p><br/>

                <h3>Email</h3>
                <p>{user.email}</p>

            </div>
        );
    }


}
