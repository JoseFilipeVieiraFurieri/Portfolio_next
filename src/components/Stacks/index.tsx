import { AiFillHtml5 } from 'react-icons/ai';
import { GrDocker } from 'react-icons/gr';
import { FaCss3Alt, FaReact, FaPython, FaNode } from 'react-icons/fa';
import {
  SiRedux,
  SiJest,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiSequelize,
  SiMocha
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';
import StackItem from './StackItem';

export default function Stacks() {
  return (
    <Container>
      <SectionTitle title="stacks" />
      <section>
        <StackItem title="HTML" icon={<AiFillHtml5 />} />
        <StackItem title="CSS" icon={<FaCss3Alt />} />
        <StackItem title="REACT" icon={<FaReact />} />
        <StackItem title="JAVASCRIPT" icon={<IoLogoJavascript />} />
        <StackItem title="PYTHON" icon={<FaPython />} />
        <StackItem title="NODE" icon={<FaNode />} />
        <StackItem title="REDUX" icon={<SiRedux />} />
        <StackItem title="JEST" icon={<SiJest />} />
        <StackItem title="TYPESCRIPT" icon={<SiTypescript />} />
        <StackItem title="MONGODB" icon={<SiMongodb />} />
        <StackItem title="MYSQL" icon={<SiMysql />} />
        <StackItem title="DOCKER" icon={<GrDocker />} />
        <StackItem title="SEQUELIZE" icon={<SiSequelize />} />
        <StackItem title="MOCHA" icon={<SiMocha />} />
      </section>
    </Container>
  );
}
