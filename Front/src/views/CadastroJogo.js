import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import './CadastroJogo.css';

  const CadastroJogo = () => {
    const onFinish = async (values) => {
        try {
            // Enviar dados para o backend
            await axios.post('http://localhost:5000/criaJogos', values);
            
            // Limpar o formulário ou realizar outras ações após o sucesso
            message.success('Jogo cadastrado com sucesso!');
          } catch (error) {
            console.error('Erro ao cadastrar jogo:', error);
            message.error('Erro ao cadastrar jogo. Por favor, tente novamente.');
          }
    };

  return (
    <div className="cadastro-jogo-container">
      <h2>Cadastro de Jogo</h2>
      <Form
        className="cadastro-jogo-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Nome"
          name="nome"
          rules={[{ required: true, message: 'Por favor, insira o nome do jogo!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Categoria"
          name="categoria"
          rules={[{ required: true, message: 'Por favor, insira a categoria do jogo!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Console"
          name="console"
          rules={[{ required: true, message: 'Por favor, insira o console do jogo!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CadastroJogo;