import PropTypes from "prop-types"

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  {
    id: 1,
    name: "라면",
    rate: 4.8,
    image: "https://mblogthumb-phinf.pstatic.net/MjAxODA3MThfNjAg/MDAxNTMxOTAxNjU5Mjk2.TPvVTTjaTNDvIWUXB3Pwq6TeBvES4QBAmxgGmOSLaE4g.UshYkHzPL6LkBQrJzxwyQ17fhudRyV8gbbY75eootggg.PNG.daishin_blog/%25ED%2595%25B4%25EC%2599%25B8_%25EC%259D%25B8%25EA%25B8%25B0_%25ED%2595%259C%25EA%25B5%25AD_%25EC%259D%258C%25EC%258B%259D_01.png?type=w800"
  },
  {
    id: 2,
    name: "족발",
    rate: 4.5,
    image: "https://www.brcn.go.kr/prog/tour_restaurant/tour/sub04_03/restaurantImage_down.do?rstrntCode=157"
  },
  {
    id: 3,
    name: "김밥",
    rate: 4.9,
    image: "https://i.pinimg.com/originals/62/0b/72/620b727a629b7a8d525858299a1b20e4.jpg"
  }
]

function App() {
  return (
    <div className="App">
      <h1>hello!!</h1>
      {foodILike.map(food=> {
        return <Food key={food.id} name={food.name} picture={food.image} rating={food.rate} />
      })}
    </div>
  );
}

export default App;
