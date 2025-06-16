  import '../style/Beverages.css'
 const Beverages=[
{
    name: 'Masala Chai',
    price: '₹40',
    image: '/images/masala-chai.jpg'
  },
  {
    name: 'Cold Coffee',
    price: '₹90',
    image: '/images/cold-coffee.jpg'
  },
  {
    name: 'Lassi',
    price: '₹70',
    image: '/images/lassi.jpg'
  },
  {
    name: 'Fresh Lime Soda',
    price: '₹60',
    image: '/images/fresh-lime.jpg'
  },
  {
    name: 'Mango Shake',
    price: '₹100',
    image: '/images/mango-shake.jpg'
  },
  {
    name: 'Coca-Cola (Can)',
    price: '₹40',
    image: '/images/coke.jpg'
  }

 ];
 const BeveragesPage=()=>{
    return(
        <>
        <div className='beverages-page'>
            <h2>Beverages</h2>
            <div className='beverages-grid '>
                {Beverages.map((item,index)=>(
          <div className="beverage-card" key={index}>
<img src={item.image} alt='im'></img>
      <h3>
        {item.name}
      </h3>
      <p>{item.price}</p>
      <button>Add to card</button>
                        </div>
                )
    
                )}
            </div>
        </div>
        </>
    )
 }
 export default BeveragesPage