
import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import products from './products.json'

function App() {
   const [money,setMoney] = useState(10000)

	return(
<>
 
 <Header money={money} />


 <div className="container products">
				{products.map(product => (
					<Product key={product.id}  product={product}/>
				))}
			</div>
  
 

</>
	)
	}
export default App;
