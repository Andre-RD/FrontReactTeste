import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Form.css'

const initialValues = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0,
};


const PromotionForm = () => {

    const[values,setValues] = useState(initialValues);
    const history = useHistory();

    function onChange(ev) {
        const {name ,value } = ev.target;
        setValues({...values, [name]: value});
    }

    function onSubmit(ev) {
        ev.preventDefault();

        axios.post('http://localhost:5000/promotions', values)
            .then((response) =>{
                history.push('/');
            });
    }

    return(
        <div>
            <h1>Promotion Show</h1>
            <h2>Cadastro de Promoções</h2>
        
            <form onSubmit={onSubmit}>
                <div className="promotion-form__group">
                    <label htmlFor="title" >Titulo</label>
                    <input id="title" name="title" type="text" onChange={onChange}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="url" >Link</label>
                    <input id="url" name="url" type="text" onChange={onChange}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="imageUrl" >Imagem URL</label>
                    <input id="imageUrl" name="imageUrl" type="text"onChange={onChange}/>
                </div>
                <div className="promotion-form__group">
                    <label htmlFor="price" >Preço</label>
                    <input id="price" name="price" type="number"onChange={onChange}/>
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>

        </div>
    );
};

export default PromotionForm;