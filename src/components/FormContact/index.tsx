import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';
import Form from './Form';

export function FormContact() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Quer entrar
            <br />
            em contato?
          </>
        }
        description={
          <>
            Preencha o formulario abaixo
            <br />
            para entrar em contato
          </>
        }
      />
      <Form />
    </Container>
  );
}
