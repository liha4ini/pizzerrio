import React, {useState} from 'react';

export const Categories = () => {

    const [activeTab, setActiveTab] = useState(0)

    let categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const onClickTabHandler = (idx) => {
        setActiveTab(idx)
    }

    categories = categories.map((el, idx) => {
        return (
            <li
                key={idx}
                onClick={() => {onClickTabHandler(idx)}}
                className={activeTab === idx ? "active" : ''}
            >
                {el}
            </li>
        )
    })

    return (
        <div className="categories">
            <ul>
                {categories}
            </ul>
        </div>
    );
};