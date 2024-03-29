import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  > img {
    width: 40rem;
    flex: 1;
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1450px) {
    > img {
      width: 30 rem;
    }

    > div {
      flex: 1;
    }

   }

  @media (max-width: 1000px) {
    > img {
      width: 22 rem;
    }
   }

   @media (max-width: 700px) {
      flex-direction: column-reverse;

      > div {
        width: 100%;
      }
    }
  } ;
`;

export const TextContainer = styled.section`
  width: 100%;
  margin-bottom: 2rem;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 1450px) {
    > h1 {
      font-size: 5rem;
    }

    > h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    > h1 {
      font-size: 3rem;
    }

    > h2 {
      font-size: 1.5rem;
    }
  }
`;

export const InfoContainer = styled.section`
  max-100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s;

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(1.2);
  }

  &:last-child {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e3;
  }

  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;

// pre é uma tag semantica que significa que sera inserido codigo dentro do css
// o gradient que faz a caixa e feito atraves do gradiente que esta no tema global
// &:last child e um seletor que pega o ultimo filho da div(no caso acima a segunda caixa de info) e adiciona e muda so nele o align, isso se chama
// senão me engano de subseletor e vc usa quando vc quer so estilizar uma parte especifica sem afetar os demais
// elementos da div
