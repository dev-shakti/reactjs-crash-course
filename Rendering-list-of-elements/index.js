import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import React from "react";
const root = createRoot(document.getElementById("root"));

function Card(props) {
     
    const {title,brand,price,thumbnail}=props
    return (
      <div className="card">
        <img src={thumbnail} alt={title} />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{brand}</p>
          <p>Price: {price}</p>
        </div>
      </div>
    );
  }

// const container = [card(1), card(2), card(3), card(4)];

// root.render(<div className="grid">container</div>);

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    root.render(
      <div className="main">
        {data.products.map((product) =>
         <Card 
         title={product.title} 
         brand={product.brand} 
         price={product.price}
         thumbnail={product.thumbnail}
         key={product.id}
         />
        )}
      </div>
    )
  );

const h1=<h1>Hello World</h1>
console.log(h1)

root.render({
    $$typeof: Symbol.for('react.element'),
    type: 'h1',
    props:{
     children:"Hello world",
    },
    ref: null,
    key: null
})


function Hello(){
    return <h1>Hello World</h1>
}

root.render({
    $$typeof: Symbol.for('react.element'),
    type: Hello,
    props:{},
    ref: null,
    key: null
})



root.render({
  $$typeof: Symbol.for("react.element"),
  type: card,
  props: {
    title: "Iphone",
    brand: "Apple",
    price: 230,
    key: 1,
  },
  ref: null,
  key: null,
});

root.render({
    $$typeof: Symbol.for("react.element"),
    type: card,
    props: {
      title: "Iphone",
      brand: "Apple",
      price: 230,
      key: 1,
      thumbnail:"https://th.bing.com/th?id=OIP.v70FtI6nm-vYCOgaXbxWQgHaPt&w=164&h=350&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    ref: null,
    key: null,
  })

root.render(<Card 
    title="iphone" 
    brand="apple" 
    price={10} 
    key={1} 
    thumbnail="
https://th.bing.com/th?id=OIP.v70FtI6nm-vYCOgaXbxWQgHaPt&w=164&h=350&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
/>)

//Component is a react element whose type is function which returns react element.
//whenever component is rendered by root it creates an object whose type is function
//and call the function with props if any props. Props is an object which can pass to a 
//component
//Component is simple js function which returns jsx.

