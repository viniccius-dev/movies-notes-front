import { FiArrowLeft } from 'react-icons/fi';
import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <a href="#">
                        <FiArrowLeft /> Voltar
                    </a>
                    <h2>Novo filme</h2>

                    <div className="inputs">
                        <Input 
                                placeholder="Título"
                                type="text"
                        />

                        <Input 
                                placeholder="Sua nota (de 0 a 5)"
                                type="number"
                                min="0"
                                max="5"
                        />
                    </div>
                </Form>
            </main>
        </Container>
    );
}