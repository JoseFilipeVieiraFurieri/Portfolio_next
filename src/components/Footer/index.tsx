import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container } from './styles';

export default function Footer() {
  function handleIcon(url: string) {
    window.open(url);
  }

  function handleScrollUp() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollUp}>
          Voltar ao topo
        </button>
        <section>
          <AiFillLinkedin
            onClick={() =>
              handleIcon(
                'https://www.linkedin.com/in/jos%C3%A9-filipe-vieira-furieri-dev-67a4981b1/'
              )
            }
          />
          <AiOutlineGithub
            onClick={() =>
              handleIcon('https://github.com/JoseFilipeVieiraFurieri')
            }
          />
        </section>
      </div>
    </Container>
  );
}

// bem legal a função Handlescroll ela pega o window , ele é nativo do JS e na hora do clique faz o scroll pra cima
