

const foodLik = [
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
    <h1>Hello</h1>
    <Food fav="kimchi" />
    </div>
  )
}

function Food(foo) {
  const { fav } = foo
  return <h1>I like {fav}</h1>
}
export default App
