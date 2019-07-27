import React from 'react';

const Shop = () => {
    return (
        <div>
            <h2>Shop Page</h2>
            <p style={warningStyle}>Search results are case-sensitive</p>
            <h3 className="center-text">Search</h3>
            <input type="text" id="shopSearch" placeholder="Search for something"/>
            <button type="submit" onClick={ItemSearch}>Search</button>
            <div id="shopResults">
                <p id="shopResultsMsg"/>
            </div>
            <h2 className="title center-text">All items</h2>
            <div className="flex jc">
                {shopData.map(elem => {
                    return <ShopItem name={elem.name} desc={elem.desc} price={elem.price} stock={elem.stockAmt}/>
                })}
            </div>
        </div>
    );
}
 
export default Shop;