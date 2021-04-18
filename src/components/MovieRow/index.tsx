import { item } from "../../models/listMovies";
import './styles.css';

export interface Props {
    title: string;
    items: item;
}

export const MovieRow = ({ title , items } : Props) => {

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`item.name`} />
                        </div>
                        ))}
                </div>
            </div>
        </div>
    )
}