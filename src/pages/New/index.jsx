import { FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Marks, Buttons } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
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

                    <Textarea placeholder="Observações" />

                    <h3>Marcadores</h3>

                    <Marks>
                        <NoteItem value="Ficção Científica" />
                        <NoteItem $isNew="true" placeholder="Novo marcador" />
                    </Marks>

                    <Buttons>
                        <Button title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </Buttons>

                </Form>
            </main>
        </Container>
    );
}