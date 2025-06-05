interface Icard {
    id: number,
    paragraph: string,
    details: string,
}


//! TODO COMPONENTE E UMA FUNÇÃO
export const Card = ({id, paragraph, details}: Icard) => {
    return(
        <div>
            <h1>Card {id}</h1>
            <p>{paragraph}</p>
            <p>{details}</p>
        </div>
    );
}