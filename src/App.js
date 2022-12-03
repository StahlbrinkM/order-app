import PizzaIcon from "./images/pizza.png"
import HamburgerIcon from "./images/hamburger.png"
import BeerIcon from "./images/beer.png"
import { useState } from "react";

function App() {

  const [listItems, setListItems] = useState([])

  const removeItems = (e) => {
    const newList = listItems.filter()
    setListItems(newList)

    console.log(newList)
  }


  return (
    <div>
      {/* ----- Container ----- */}
      <div className='w-4/12 italic'>
        {/* ----- Header -----*/}
        <div className='bg-black p-4'>
          <h1 className="text-white">Jimmy's Diner</h1>
          <h3 className="text-white">The best burgers and pizzas in town</h3>
        </div>
        {/* ----- Main Area ----- */}
        <div>
          <div className='my-7 flex'>
            <img src={PizzaIcon} alt='pizza icon' className="w-12"/>
            <div className="flex-column ml-4">
              <p className='text-xl'>Pizza</p>
              <p className='text-xs'>pepperoni ,mushroom, mozzarella</p>
              <p className='text-lg'>$14</p>
            </div>
            <button onClick={() => setListItems((prevItems) => [...prevItems, "Pizza"])} className="ml-auto mr-6 border-2 border-black rounded-full w-16 h-16">+</button>
          </div>
          <div className='my-7 flex'>
            <img src={HamburgerIcon} alt="hamburger icon" className="w-12 object-contain"/>
            <div className="flex-column ml-4">
              <p className='text-xl'>Hamburger</p>
              <p className='text-xs'>beef, cheese, lettuce</p>
              <p className='text-lg'>$12</p>
            </div>
            <button onClick={() => setListItems((prevItems) => [...prevItems, "Hamburger"])} className="ml-auto mr-6 border-2 border-black rounded-full w-16 h-16">+</button>
          </div>
          <div className='my-7 flex'>
            <img src={BeerIcon} alt='beer icon' className="w-12 object-contain"/>
            <div className="flex-column ml-4">
              <p className='text-xl'>Beer</p>
              <p className='text-xs'>grain, hops, yeast, water</p>
              <p className='text-lg'>$12</p>
            </div>
            <button onClick={() => setListItems((prevItems) => [...prevItems, "Beer"])} className="ml-auto mr-6 border-2 border-black rounded-full w-16 h-16">+</button>
          </div>
        </div>
        {/* ----- Main Area ----- */}
        {/* ----- Order list ----- */}
        <div className="flex-col">
            {listItems.length >= 1 ?
          <div>
            <p className="text-center">Your order</p>
            {listItems.map((item, index) => {
              return <div key={index} className="flex"><p className="text-xl">{item}</p><div><button onClick={removeItems} className="text-xs font-thin ml-4 text-gray-500">remove</button></div><p className="ml-auto mr-10">$14</p></div>
            })}
            <button className="bg-green-400 h-12 w-4/5 ml-10 mt-4 rounded text-center">Complete order</button>
          </div>
            : ""}
        </div>
        {/* ----- Order list ----- */}
      </div>
      {/* ----- Container ----- */}
    </div>
  );
}

export default App;
