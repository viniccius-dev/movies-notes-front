import { Container, Profile } from './styles';
import { Input } from '../Input';

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input
                    placeholder="Pesquisar pelo título"
                    type="text"
            />

            <Profile>
                <div>
                    <span>Marcos Vinícius</span>
                    <a href="#">Sair</a>
                </div>
                <img 
                    src="https://github.com/viniccius-dev.png"
                    alt="Foto do usuário"
                />
            </Profile>
        </Container>
    );
}