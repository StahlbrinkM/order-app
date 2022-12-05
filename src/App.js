import PizzaIcon from "./images/pizza.png"
import HamburgerIcon from "./images/hamburger.png"
import BeerIcon from "./images/beer.png"
import checkMark from "./images/checkMark.png"
import { useState } from "react";

function App() {

  const [listItems, setListItems] = useState([])
  const [isVisable, setIsVisable] = useState(false)
  const [totalPrice, setTotalPrice] = useState([])
  const [finishedOrder, setFinishedOrder] = useState(false)

  const removeItems = (index) => {
    const newListItems = listItems.filter((_, i) => i !== index);
    setListItems(newListItems)
  }

  const addFoodData = (itemFood, itemPrice) => {
    setListItems((prevItems) => [...prevItems, itemFood]);
    setTotalPrice((prevTotal) => [...prevTotal, itemPrice]);
  };

  const changeModal = () => {
    setIsVisable(prevVisable => !prevVisable);
    setFinishedOrder(prevOrder => !prevOrder);

    setTimeout(() => {setFinishedOrder((prevOrder => !prevOrder))}, 3000)
    setTimeout(() => { window.location.reload(false)}, 3000)

  }


  return (
    <div className="bg-gray-200 min-h-screen">
      {/* ----- Container ----- */}
      <div className='w-4/12 italic flex-col m-auto bg-white'>
        {/* ----- Header -----*/}
        <div className='bg-[url("./images/bg-img.png")] h-32 bg-cover pl-10 pt-10 mt-10'>
          <h1 className="text-white text-2xl">Jimmy's Diner</h1>
          <h3 className="text-white text-xs">The best burgers and pizzas in town</h3>
        </div>

        {/* ----- Main Area ----- */}
        <div >
          <div className='my-7 pb-5 m-auto flex justify-center px-2 w-11/12 border-b border-black'>
            <img src={PizzaIcon} alt='pizza icon' className="w-12"/>
            <div className="flex-column ml-4">
              <p className='text-xl'>Pizza</p>
              <p className='text-xs'>pepperoni ,mushroom, mozzarella</p>
              <p className='text-lg'>$14</p>
            </div>
            <button onClick={() => addFoodData("Pizza", 14)} className="ml-auto mr-6 border-2 border-black rounded-full w-16 h-16 hover:cursor-pointer hover:bg-slate-200 focus:bg-slate-200">+</button>
          </div>
          <div className='my-7 pb-5 m-auto flex justify-center px-2 w-11/12 border-b border-black'>
            <img src={HamburgerIcon} alt="hamburger icon" className="w-12 object-contain"/>
            <div className="flex-column ml-4">
              <p className='text-xl'>Hamburger</p>
              <p className='text-xs'>beef, cheese, lettuce</p>
              <p className='text-lg'>$12</p>
            </div>
            <button onClick={() => addFoodData("Hamburger", 12)} className="ml-auto mr-6 border-2 border-black rounded-full w-16 h-16 hover:cursor-pointer hover:bg-slate-200 focus:bg-slate-200">+</button>
          </div>
          <div className='my-5 pb-5 m-auto flex justify-center px-2 w-11/12'>
            <img src={BeerIcon} alt='beer icon' className="w-12 object-contain"/>
            <div className="flex-column ml-4">
              <p className='text-xl'>Beer</p>
              <p className='text-xs'>grain, hops, yeast, water</p>
              <p className='text-lg'>$12</p>
            </div>
            <button onClick={() => addFoodData("Beer", 12)} className="ml-auto mr-6 border-2 border-black rounded-full w-16 h-16 hover:cursor-pointer hover:bg-slate-200 focus:bg-slate-200">+</button>
          </div>
        </div>
        {/* ----- Main Area ----- */}

        {/* ----- Order list ----- */}
        <div className="flex-col px-2">
            {listItems.length >= 1 ?
          <div>
            <p className="text-center border-t underline border-black pt-10 pb-4 text-lg">Your order</p>

            {listItems.map((item, index) => {
              return <div key={index} className="flex px-8 min-h-96">
                <p className="text-xl">
                  {item}
                </p>
                <div>
                  <button onClick={() => removeItems(index)} className="text-xs font-thin ml-4 text-gray-500">
                    remove
                  </button>
                </div>
                  <p className="ml-auto mr-6">
                    ${item === "Pizza" ? 14 : 12}
                  </p>
                </div>
            })}


            <div className="px-8 border-t border-black mt-4 pt-4 flex">
              <p className="text-xl">Total price:</p>
              <p className="ml-auto mr-6">${totalPrice.reduce((a,b) => a + b, 0)}</p>
            </div>
            
            <button onClick={() => setIsVisable(prevVisable => !prevVisable)} className="bg-green-400 h-12 w-4/5 ml-10 mt-4 rounded text-center mb-4 hover:bg-green-500 focus:bg-green-500 hover:cursor-pointer">Complete order</button>
          </div>
            : ""}
        </div>
        {/* ----- Order list ----- */}

        {/* ----- Modal ----- */}
        {isVisable === true ? 
        <div className="w-[25rem] h-96 fixed bg-white inset-x-6 inset-y-10 flex-col border border-black m-auto">
          <div className="justify-center align-center items-center pt-10">
            <p className="text-black text-xl ml-[7rem]">Enter your details</p>
            <input className="block ml-10 pl-4 mt-12 border border-black rounded h-12 w-4/5" type="text" placeholder="Enter your name"></input>
            <input className="block ml-10 pl-4 mt-2 border border-black rounded h-12 w-4/5" type="text" placeholder="Enter your card"></input>
            <input className="block ml-10 pl-4 mt-2 border border-black rounded h-12 w-4/5" type="text" placeholder="Enter CVV"></input>
          </div>

          <button onClick={() => changeModal()} className="bg-green-400 h-12 w-4/5 ml-10 mt-6 rounded text-center hover:bg-green-500 focus:bg-green-500 hover:cursor-pointer">Pay</button>


        </div> 
        : ""}

        {finishedOrder && !isVisable ? 
          <div className="w-[25rem] h-96 fixed bg-white inset-x-6 inset-y-10 flex-col border border-black m-auto">
            <div className="justify-center align-center items-center pt-10">
              <p className="text-3xl text-center">Your order is on it's way!</p>
              <img className="w-2/4 mx-auto mt-10" src={checkMark} alt="finished order"/>
            </div>
          </div>
          : ""
        }
        {/* ----- Modal ----- */}

      </div>
      {/* ----- Container ----- */}
    </div>
  );
}

export default App;
