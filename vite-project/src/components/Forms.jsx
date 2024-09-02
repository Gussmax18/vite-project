import { useState } from "react";
import "./Forms.css";

const Form = () => {
  // Estado inicial do formulário
  const initilForm = {
    nome: "",
    modelo: "",
    marca: "",
  };

  // Estado do formulário
  const [formState, setFormState] = useState(initilForm);

  // Estado para armazenar erros de validação
  const [erros, setErros] = useState({});

  // Função para lidar com a alteração dos campos de entrada
  const handleInput = (event) => {
    const target = event.currentTarget;
    const { value, name } = target;

    setFormState({ ...formState, [name]: value });
  };

  // Função para validar o formulário
  const validateForm = () => {
    const newErros = {};
    const validPattern = /^[a-zA-Z0-9]*$/; // Permite apenas letras e números

    // Verificar cada campo
    ['nome', 'modelo', 'marca'].forEach(field => {
      if (!formState[field]) {
        newErros[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} é obrigatório`;
      } else if (!validPattern.test(formState[field])) {
        newErros[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} deve conter apenas letras e números`;
      }
    });

    setErros(newErros);
    return Object.keys(newErros).length === 0;
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log(formState);
      setFormState({ ...initilForm });
      setErros({});
    }
  };

  return (
  
    <div className="container">

<h1>Cadastre seu carro</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={formState.nome}
              onChange={handleInput}
            />
            {erros.nome && <span className="erro">{erros.nome}</span>}
          </div>

          <div className="form-control">
            <label htmlFor="modelo">Modelo</label>
            <input
              type="text"
              name="modelo"
              id="modelo"
              value={formState.modelo}
              onChange={handleInput}
            />
            {erros.modelo && <span className="error">{erros.modelo}</span>}
          </div>

          <div className="form-control">
            <label htmlFor="marca">Marca</label>
            <input
              type="text"
              name="marca"
              id="marca"
              value={formState.marca}
              onChange={handleInput}
            />
            {erros.marca && <span className="erro">{erros.marca}</span>}
          </div>

          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
