import Header from '../../components/Header';
import { ProjetoItem } from '../../components/ProjetoItem';
import { ProjetoContainer } from '../../styles/ProjetosStyles';

function Projetos() {
  return (
    <ProjetoContainer>
      <Header />

      <main className="container">
        <ProjetoItem
          title="Car shop"
          type="Back End"
          slug="teste"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdi0OC2W-SQviDLXr23KYvoKkXP_e_xfdCmH-y-ZM4&s"
        />
        <ProjetoItem
          title="Car shop"
          type="Back End"
          slug="teste"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdi0OC2W-SQviDLXr23KYvoKkXP_e_xfdCmH-y-ZM4&s"
        />
        <ProjetoItem
          title="Car shop"
          type="Back End"
          slug="teste"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdi0OC2W-SQviDLXr23KYvoKkXP_e_xfdCmH-y-ZM4&s"
        />
      </main>
    </ProjetoContainer>
  );
}

export default Projetos;
