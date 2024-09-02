import "./card.css";

const Card = () => {
    const cardData = [
        {
            titulo: "Huracan",
            description: "Lamborghini",
            link: "https://images.hdqwalls.com/wallpapers/lamborghini-huracan-evo-2019-4k-dz.jpg",
        },
        {
            titulo: "570S",
            description: "Maclaren",
            link: "https://th.bing.com/th/id/R.4320f04cf121d7991a1704503f2d3960?rik=0kRz9nqeqUrdSQ&pid=ImgRaw&r=0",
        },
        {
            titulo: "488",
            description: "Ferrari",      
            link: "https://th.bing.com/th/id/OIP.KHulsBCbINKblTLs7wJr-AHaE8?rs=1&pid=ImgDetMain",
        },
    ];

    return (
        <div className="card-conteiner">
            {cardData.map((card, index) => (
                <div className="card" key={index}>
                    <h2>{card.titulo}</h2>
                    <p>{card.description}</p>
                    <img src={card.link} alt={card.titulo} className="card-image" />
                </div>
                  
            ))}

       
        </div>
    );
};

export default Card;
