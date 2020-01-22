import React, { useState } from 'react';
import './Form.css';

function Form({ onSubmit }) {
    //const [users, setUsers] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
            name, 
            email
        });

        setName('');
        setEmail('');
    }

    return (
    <main>
        <div className="block-form">
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit} >
                <span className="title-span">Seu nome</span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Digite aqui seu nome" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                
                <span className="title-span">Seu email</span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Digite seu melhor email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />


                <button type="submit" className="btn btn-success btn-form">Salvar</button>
            </form>
        </div>
    </main>
)}

export default Form;