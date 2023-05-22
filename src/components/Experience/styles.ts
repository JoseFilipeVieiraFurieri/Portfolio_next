import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content;

    transition: 0.5s;

    h1 {
        color: ${({ theme }) => theme.primary}
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    h2 {
        color: ${({ theme }) => theme.secondary}
        font-size: 1.5rem;
        font-weight: 300;
        margin-bottom: 1rem;
    }

    p {
        color: ${({ theme }) => theme.textLight}
        font-size: 1rem;
        font-weight: 300;
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  &:nth-child(even) > div {
    margin-top: 4rem;
  }

  @media (max-width: 1000px) {
    > div {
        height: 15rem;
        padding-top: 1.5rem;
    }

    h1 {
        height: 1.2rem;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 1rem;
    }

    p {
        font-size: 0.9rem;
    }
  }

  @media (max-width: 700px) {
    &:nth-child(even) > div {
        margin-top: 0rem;
      }

    &:hover > div {
        filter: brightness(1.3);
        transform: translateY(0px);
    }
    
    > div {
        height: auto;
        padding-top: 2rem;

        h1 {
            height: 2rem;
        }
    
        h2 {
            font-size: 1.5rem;
        }
    
        p {
            font-size: 1rem;
        }
    }

  }
`;

// &:hover > div achei bom falar desse aqui, oque acontece aqui e que aplica um efeito de hover em tudo
// que estiver no container e for uma div. O brigth controla o efeito de iluminação ja o trasnlateY, tranloca o
// testo pra cima(eixo Y)

// &:nth-child(even) pega os container pares e aplica no que for div uma margin top. e usado novamente no brea-
// king point (700px) para retirar a margem.remove o efeito do hover tambem
