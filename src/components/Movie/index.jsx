import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import { Container, Stars } from './styles';

import { Tag } from '../Tag';

export function Movie({ data, ... rest }) {
    const renderStars = (rating) => {
        let stars = [];
        for(let i = 0; i < 5; i++) {
            stars.push(i < rating ? <IoMdStar key={i} /> : <IoMdStarOutline key={i} />);
        }
        return stars;
    }

    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            <Stars >
                {renderStars(data.rating)}
            </Stars>

            <p>{data.description}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }

        </Container>
    );
}