import PropTypes from 'prop-types'


function Food({name,picture,rating}){ 


  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>

  );
  
}

const foodILike = [ 
{
  id: 1,
  name:'kimchi',
  image: 'images/kimchi.png',
  alt: '김치',
  rating: 5.0
},
{
  id:2,
  name:'Bibimbap',
  image:'images/bibimbap.jpg',
  alt:'비빔밥',
  rating: 4.9
}

];

function App() {
  return (

    <div>
      
      {
        
        foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))
        
      }


      </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};


export default App