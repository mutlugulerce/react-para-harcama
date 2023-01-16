
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import products from './products.json'

function App() {
   const [money,setMoney] = useState(50000000)
   const [basket,setBasket] = useState([])
   const [total,setTotal] =useState(0)

 useEffect(() => {
  setTotal(
	basket.reduce((acc,item) => {
    return acc + (item.amount * (products.find(product => product.id === item.id)).price)
	},0)
  )


},[basket])



	return(
<>
 
 <Header money={money} />


 <div className="container products">
				{products.map(product => (
					<Product key={product.id}  product={product} basket={basket} setBasket={setBasket} money={money} total={total}/>
				))}
			</div>
  
 

</>
	)
	}
export default App;
