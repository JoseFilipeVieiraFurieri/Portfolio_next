import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4 rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  ul {
    display: flex;
    gap: 2 rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;

// anotaçoes. a muita coisa diferente aqui por causa do nextJs, apesar de eu não ter certeza se isso é do bolerplate
// ou de fato função do next e importante lembrar que, esta fazendo o uso do typescript junto com o react então ser
// diferente do jsx mesmo. Ali em cima so esta falando que o NAvcontainer vai receber uma interface que contem a variavel
// boleana isActive que vai controlar as cores ao fazer o hover no componente. Complicado mas o intuito é aprender
