import "./CardGallery.css";

function CardGallery({props}){
    let cards = [];
    props.entries[0].card_picker.cards.forEach((card) => {
        cards.push(
            <li className="list-group-item border-0 me-2">
                <img src={card.image}></img>
                <p className="card-price">${card.price}</p>
                <p className="card-name fw-bold">{card.name}</p>
            </li>
        )
    });
    return(
        <div className="row justify-content-center mt-5">
            <div className="col-auto">
                <ul className="list-group list-group-horizontal">
                    {cards}
                </ul>
            </div>
        </div>
    )
}

export default CardGallery;