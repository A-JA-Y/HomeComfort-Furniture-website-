import React, {useEffect,useState} from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  
  async function fetchProducts() {
    try{
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/`)
        const result = await response.json();
        console.log(result.products.filter((item)=>item.category === "furniture"));

        if(result.products.filter((item)=>item.category === "furniture")){
            setProducts((prevData)=> [...prevData, ...result.products.filter((item)=>item.category === "furniture")]);
            
            setLoading(false);
        }

    }catch(e){
        setLoading(false);
    }
  }

  
  useEffect(() => {
    fetchProducts();
  }, [count]);
  if(loading) {
    return <div className='text-center text-4xl font-extrabold'>Loading...</div>
  }

 
          
  return (
    <div>
      <Navbar/>
      <div className='products bg-slate-100 bg-opacity-5'>
        <div className='text-center my-4 text-4xl font-extrabold drop-shadow-lg uppercase'>Our Products </div>
    <div className="product-container grid lg:grid-cols-2 gap-4 sm:grid-cols-1 p-4 ">
        {
            products && products.length?
            products.map((item)=>{
                return <div className="product w-full flex items-center justify-center flex-col m-2 bg-slate-600 bg-opacity-5 rounded-xl drop-shadow-lg" key={item.id}><img className='hover:scale-125 transition-transform' src={item.thumbnail} alt={item.title}/>
                <p className='font-semibold text-3xl text-wrap mb-3 font-sans px-3 mx-2'>{item.title}</p>
                <button className='btn w-1/3  sm:px-4 mb-4 lg:p-2 bg-green-700 hover:bg-green-500 rounded-lg hover:scale-110  transition-transform lg:hover:font-bold sm:hover:font-medium '><h1 className='mx-3'><a href="https://www.flipkart.com/search?q=furniture&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off" target='_blank'>Buy now</a></h1></button>
                </div>
            }) : null
        }
    </div>

    <div className="button-container ">
        <button disabled={true} onClick={()=> setCount(count + 1)} className='btn w-full bg-cyan-500 '>More products coming soon!</button>
        
    </div>
  </div>
      <Footer/>
    </div>
  )
}
