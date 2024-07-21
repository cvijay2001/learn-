import Del_btn from "./component/Action_btn"
import Todo from "./component/Todo";
import Todo_heading from "./component/Todo_heading";
import Todo_data from "./component/Todo_data"
import Card from "./component/Card"
import { useState } from "react";


function App() {
  const todo_obj = [
    // { "todo": 'Buy Milk', "date": '4/10/24' },
    // { "todo": 'Math HW', "date": '5/10/24' },
    // { "todo": 'Trip', "date": '6/11/24' },
    // { "todo": 'School Event', "date": '4/10/24' },
  ]
  const my_var = "main edited"

  const [todovalue, todoset] = useState(todo_obj)

  const cardData = [
    {
      title: 'Card Title ',
      image: 'https://via.placeholder.com/150',
      content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      footer: 'Card Footer 1',
      button: 'Go somewhere'
    },
    {
      title: 'Card Title ',
      image: 'https://via.placeholder.com/150',
      content: 'More example text to demonstrate passing different content as children.',
      footer: 'Card Footer 2',
      button: 'Click Me'
    },
    {
      title: 'Card Title ',
      image: 'https://via.placeholder.com/150',
      content: 'Another example text to build on the card title.',
      footer: 'Card Footer 3',
      button: 'Learn More'
    },
    {
      title: 'Card Title ',
      image: 'https://via.placeholder.com/150',
      content: 'Another example text to build on the card title.',
      footer: 'Card Footer 3',
      button: 'Learn More'
    }, {
      title: 'Card Title ',
      image: 'https://via.placeholder.com/150',
      content: 'Another example text to build on the card title.',
      footer: 'Card Footer 3',
      button: 'Learn More'
    },
    {
      title: 'Card Title ',
      image: 'https://via.placeholder.com/150',
      content: 'Another example text to build on the card title.',
      footer: 'Card Footer 3',
      button: 'Learn More'
    }, {
      title: 'Card Title ',
      image: 'https://via.placeholder.com/150',
      content: 'Another example text to build on the card title.',
      footer: 'Card Footer 3',
      button: 'Learn More'
    }
  ];

  return (
    <>

      <center>
        <Todo_heading></Todo_heading>
        <Todo todovalue={todovalue} todoset={todoset}></Todo>
        <Todo_data todovalue={todovalue} todoset={todoset} ></Todo_data>
      </center>

      <div className="container mt-5">
        <div className="row">

          {
            cardData.map((data, index) => {
              return (
                <div className="col-sm-3" key={index}>
                  <Card
                    card_index = {index+1}
                    title={data.title }
                    image={data.image}
                    footer={data.footer}
                  >
                    <p className="card-text">{data.content}</p>
                    <a href="#" className="btn btn-primary">{data.button}</a>
                  </Card>
                </div>
                
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App;