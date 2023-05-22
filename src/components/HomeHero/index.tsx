import picture from '../../assets/Image_self.jpeg';
import { TextContainer, Container, InfoContainer, CodeItem } from './styles';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />

      <div>
        <TextContainer>
          <h1>Oi</h1>
          <h2>Me chamo José Filipe</h2>
        </TextContainer>
        <InfoContainer>
          <CodeItem>
            <span className="comment">Minha apresentação</span>
            <span className="purple">Info</span> {'\u007B'}
            <div>
              Nome : <span className="blue">José Filipe</span>
            </div>
            <div>
              Sobrenome : <span className="blue">Vieira Furieri</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Info</span> {'\u007B'}
            <div>
              Função :<span className="blue">Desenvolvedor Web Full Stack</span>
            </div>
            <div>
              Formação : <span className="blue">Trybe</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfoContainer>
      </div>
    </Container>
  );
}

// os {'xxxxx'} são unicodes de abrir e fechar chaves( para contarnar o problema do react que {} que vc
// ira inserir codigo no HTML). O unicode são codigos universais pra diversas coisa, por exemplo e possivel
// atraves inserir simbolos no seu html. Mas existe pra praticamente tudo
