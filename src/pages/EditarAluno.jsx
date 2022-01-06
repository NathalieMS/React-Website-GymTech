import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import HeaderSistema from '../components/HeaderSistema';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Alunos from '../service/Alunos';
import Button from '../components/Button';

class EditarAluno extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            Aluno: {
                nome: '',
                cpf: '',
                endereco: '',
                numero: '',
                bairro: '',
                cidade: '',
                estado: '',
                telefone: '',
                email: '',
                idade: '',
                plano: '',
            }

        }
    }

    useEffect(() => {
        
    })

//nome, cpf, endereco, numero, bairro, cidade, estado, telefone, email, idade, plano
}



