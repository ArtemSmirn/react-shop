import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer';

function App() {

  const [cartOponed, setCartOponed] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://633f22ea83f50e9ba3c06603.mockapi.io/Items').then((res) => {
      return res.json()
    }).then((json) => {
      setItems(json)
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }



  return (
    <div className="wrapper clear">

      {cartOponed && <Drawer items={cartItems} onCloseCart={() => setCartOponed(false)}/>}
      <Header onClickCart={() => setCartOponed(true)} />
      
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..." />
          </div>
        </div>
         <div className="d-flex flex-wrap">   

          {items.map((item) =>(
            <Card title={item.name} price={item.price} imageUrl={item.imageUrl} 
                  onClickPlus={(obj) => onAddToCart(obj) } onClickFavorite={() => alert('Добавили в закладки')}/>
          ))}

        </div> 
      </div> 
    </div>
  );
}

export default App;
