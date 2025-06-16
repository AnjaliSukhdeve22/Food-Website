 import '../style/maincourse.css'
 const Maincourse=[
    {
    name: 'Butter Chicken',
    price: '₹280',
    image: '/images/butter-chicken.jpg'
  },
  {
    name: 'Paneer Butter Masala',
    price: '₹240',
    image: '/images/paneer-butter-masala.jpg'
  },
  {
    name: 'Veg Biryani',
    price: '₹220',
    image: '/images/veg-biryani.jpg'
  },
  {
    name: 'Dal Makhani',
    price: '₹190',
    image: '/images/dal-makhani.jpg'
  },
  {
    name: 'Chicken Biryani',
    price: '₹260',
    image: '/images/chicken-biryani.jpg'
  },
  {
    name: 'Shahi Paneer',
    price: '₹250',
    image: '/images/shahi-paneer.jpg'
  }
 ];

 const Maincoursepage=()=>{
    return(
        <>
        <div className="main-course-page">
            <h2>Maincourse</h2>
            <div  className='main-course-grid'>
                {Maincourse.map((item,index)=>(
                    <div key={index} className="main-course-card">
                        <img src={item.image}alt='img'></img>
                        <h3>{item.name}</h3>
                       <p>
                        {item.price}
                       </p>
                       <button>Add to Card</button>
                        </div>
                ))

                }
            </div>
        </div>
        </>
    )
 }

 export default Maincoursepage