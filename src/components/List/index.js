import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './List.css';

import Swal from 'sweetalert2'


async function handleDeleteUser(id) {
    const response = await api.delete(`/users/${id}`);

    if (response.data.Delete === "true") {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Deletando usuário...'
          })

        setTimeout(() => {
          window.location.reload();
        }, 3000);
    }
 }


const List = ({user}) => (
    <div className="usersList">
        <h3> Usuário </h3>
        <p>{ user.name }</p>

        <div className="buttons">
            <Link to={`/details/${user._id}`}><button className="btn btn-info">Visualizar</button></Link>
            <Link to={`/update/${user._id}`}><button className="btn btn-warning">Editar</button> </Link>
            <button onClick={handleDeleteUser.bind(this, user._id)} className="btn btn-danger">Deletar</button>
        </div>
    </div>
);

export default List;