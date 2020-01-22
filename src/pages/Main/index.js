import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Swal from 'sweetalert2'


import Form from '../../components/Form';
import List from '../../components/List';

function Main(){
    const [users, setUsers] = useState([]) 


    async function handleAddUser(data){
        const response = await api.post('/users', data); 

        if (response.data.User === "Already Registered") {
            Swal.fire({
                title: 'Atenção',
                text: 'Esta conta de email já está cadastrada!',
                icon: 'warning',
                confirmButtonText: 'Tentar outro'
              })
        }else{
            setUsers([...users, response.data]);
        }
    }

   
    useEffect(() => {
        async function loadUsers() {
        const response = await api.get('/users');

        setUsers(response.data);
        }

        loadUsers();
    }, [])

    return (
        <div className="container">
            <Form  onSubmit={handleAddUser} /> 
            {users.map(user => (
                <List key={user._id} user={user} />
            ))}
        
        </div>
    );
}

export default Main;