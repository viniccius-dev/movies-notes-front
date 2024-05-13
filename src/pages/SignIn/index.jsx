import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';

import { Container, Form, Background } from './style';

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />
            </Form>

            <Background />
        </Container>
    );
}