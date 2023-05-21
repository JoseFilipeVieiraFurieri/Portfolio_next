import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
}

export default function NavLink({ title, path }: Props) {
  const router = useRouter();

  const isActive = router.pathname === path;

  // isso é do next. faz a mesma coisa que o useHistory. o inteito aqui e o seguinte. o objetivo do isActive e definir
  // qual link(home ou projetos) esta ativo ou seja qual que esta clicado. sendo assim sera true quando o path for igual
  // ao clicado ele fica verde. quando esta na home fica verde o link home e vice versa

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
