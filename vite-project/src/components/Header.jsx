import'./Header.css'  
const Header = () => {
  const headerStyle = {
    backgroundColor: 'black',
    padding: '20px',
    borderBottom: '2px solid rgb(7 74 140)'
  };

  const titleStyle = {
    margin: 0,
    fontSize: '24px',
    color: 'gold'
  };


  return (
    <header style={headerStyle}>

      <div className="Header">
        <h1 style={titleStyle}>Luxury Motors</h1>


        <ul>

          <li> Home</li>
          <li>Catalogo</li>
          <li>pontos de venda</li>
          <li>Cadastre seu carro</li>
          <li>perfil</li>

        </ul>

      </div>



    </header>
  );
};

export default Header;