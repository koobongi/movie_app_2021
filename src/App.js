import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils"


const foodLike = [
  {
    name: "chikin",
    image: "http://economychosun.com/query/upload/303/20190608214338_gubchoja.jpg"
  },
  {
    name: "ham",
    image: "https://img.newspim.com/news/2021/05/25/2105251548352120_w.jpg"
  }
]


function App() {
  return (
    <div>
      {
        foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))
      }
    </div>
  )
}

function Food({name, picture}) {
  return (
  <div>
    <h1>I like {name} </h1>
    <img src={picture} />
  </div>
  )
}
export default App
