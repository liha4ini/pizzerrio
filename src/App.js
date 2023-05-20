import {useEffect, useState} from "react";

import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sort} from "./components/Sort";
import {PizzaCard} from "./components/PizzaCard/PizzaCard";
import {PizzaCardSceleton} from "./components/PizzaCard/PizzaCardSceleton";

import './scss/app.scss';


function App() {

    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://645e38588d08100293f9e010.mockapi.io/items')
            .then(res => res.json())
            .then(arr => {
                setPizzas(arr)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {isLoading
                            ? [...new Array(10)].map((_, index) => {
                                return (
                                    <PizzaCardSceleton key={index}/>
                                )
                            })
                            : pizzas.map(el => {
                                return (
                                    <PizzaCard key={el.id} {...el} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
