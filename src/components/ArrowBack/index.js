import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function ArrowBack(){
    return (
        <div className="icon-back">
            <Link className="backLink" to="../"><FontAwesomeIcon classNam="back" icon={faArrowLeft} /> Voltar </Link>
        </div>
    );
}

export default ArrowBack;