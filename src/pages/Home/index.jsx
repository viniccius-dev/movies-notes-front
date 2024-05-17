import { FiPlus } from 'react-icons/fi';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

export function Home() {
    return (
        <Container>
            <Header />

            <div>
                <h3>Meus Filmes</h3>

                <Button icon={FiPlus} title="Adicionar filme" />
            </div>
        </Container>
    );
}