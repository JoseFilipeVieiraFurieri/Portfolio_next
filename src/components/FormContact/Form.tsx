import { FormContainer, Input, TextArea } from './styles';

function Form() {
  return (
    <FormContainer>
      <Input placeholder="Nome" required />
      <Input placeholder="E-mail" type="email" required />
      <TextArea placeholder="mensagem" />
      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}

export default Form;

// e bom ver que esse é outra forma de componentizar esses input estão vindo da styles( na seção vc pode
// colocar o styled.div ou qualquer outra coisa e ele entende que ira ser criado) no caso são criados os
// input e o forms ja estilizados
