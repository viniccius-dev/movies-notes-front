import { Container } from './styles';
import { Input } from '../Input';

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input
                    placeholder="Pesquisar pelo título"
                    type="text"
            />

            <h1>RocketMovies</h1>
        </Container>
    );
}