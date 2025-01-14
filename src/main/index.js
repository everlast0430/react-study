import React from 'react';
import './index.css'
import axios from "axios"
import {useState} from "react";
import {Link} from "react-router-dom"

function MainPage() {
    const [products, setProducts] = useState([])
    React.useEffect(
        function (){
            axios.get('https://1ba02c7d-496c-437b-bc34-b2d7a263cbe0.mock.pstmn.io/products')
                .then(function (result){
                    console.log(result);
                    const products = result.data.products;
                    setProducts(products)
                }).catch(function (error) {
                console.log('error occur : ', error);
            });
        },[]
    )
    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png"/>
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png"/>
                </div>
                <h1> 판매되는 상품들</h1>
                <div id="product-list">
                    {products.map(function (product, index){
                        return (
                            <div className="product-card">
                                <Link className="product-link" to={`/products/${index}`}>
                                    <div>
                                        <img className="product-img" src={product.imageUrl}/>
                                    </div>
                                    <div className="product-contents">
                                        <span className="product-name">
                                            {product.name}
                                        </span>
                                        <span className="product-price">
                                            {product.price}
                                        </span>
                                        <div className="product-seller">
                                            <img className="product-avatar" src="images/icons/avatar.png"/>
                                            <span>{product.seller}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }


                </div>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default MainPage;