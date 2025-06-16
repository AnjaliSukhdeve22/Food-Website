import '../style/Desset.css'
const Dessert=[
{
    name: 'Gulab Jamun',
    price: '₹100',
    image: '/images/gulab-jamun.jpg'
  },
  {
    name: 'Rasgulla',
    price: '₹90',
    image: '/images/rasgulla.jpg'
  },
  {
    name: 'Ice Cream (Vanilla)',
    price: '₹80',
    image: '/images/vanilla-ice-cream.jpg'
  },
  {
    name: 'Chocolate Brownie',
    price: '₹120',
    image: '/images/chocolate-brownie.jpg'
  },
  {
    name: 'Kulfi',
    price: '₹90',
    image: '/images/kulfi.jpg'
  },
  {
    name: 'Fruit Custard',
    price: '₹110',
    image: '/images/fruit-custard.jpg'
  }

]
const DessertsPage=()=>{
    return(
        <>
        <div className="desserts-page">
            <h2>Desserts</h2>
            <div className="desserts-grid">
 {Dessert.map((item,index)=>(
            <div key={index} className="desserts-card">
                  
                  <img src={item.image} alt="img1"></img>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button>Add to card</button>
                </div>
            ))

            }
            </div>
           
        </div>
        </>
    )
}
export default DessertsPage;