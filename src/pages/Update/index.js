import React, { Component } from 'react';
import api from '../../services/api';

import Swal from 'sweetalert2'

import ArrowBack from '../../components/ArrowBack';

import './Update.css';

export default class Update extends Component { 
    
    state = {
        id: '',
        name: '',
        email: '',
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/users/${id}`);

        this.setState({ 
            id: response.data._id,
            name: response.data.name, 
            email: response.data.email
        });
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleEmailChange = e => {
        this.setState({ email: e.target.value });
    }

    handleUpdate = async e => {
        e.preventDefault();
        const response = await api.put(`/users/${this.state.id}`, {
            name: this.state.name,
            email: this.state.email,
        }); 

        if (response.data.User === "Already Registered") {
            Swal.fire({
                title: 'Atenção',
                text: 'Esta conta de email já está em uso!',
                icon: 'warning',
                confirmButtonText: 'Tentar outro'
              })
        }else{
            window.location.href = "../";
        }
    }

    render (){
        const { id, name, email } = this.state;

        return (
            <div className="UserInfo">
                <ArrowBack />
                <main>
                    <div className="block-form">
                        <h2>Editar Cadastro</h2>
                        <form onSubmit={this.handleUpdate}>
                            <span className="title-span">Seu nome</span>
                            <input type="hidden" value={id}/>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Edite seu nome" 
                                defaultValue={name}
                                onChange={this.handleNameChange}
                            />
                            
                            <span className="title-span">Seu email</span>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Edite seu email" 
                                defaultValue={email}
                                onChange={this.handleEmailChange}
                            />


                            <button type="submit" className="btn btn-info btn-form">Editar</button>
                        </form>
                    </div>
    
                </main>
            </div>
        );
    }
}
