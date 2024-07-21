import FoodItems from "./FoodItems";
function Conditional1({fruits}){

   

    let Ele = fruits.length !== 0 ? <p>i am turnary element</p> : null;
    return(
    <>  
   { fruits.length === 0 && <h1>I Am Hungry</h1>}
          <h2>Fruits</h2>
            <h5>{Ele}</h5>
         <FoodItems fruits={fruits}></FoodItems>
        </>
)
}
export default Conditional1;
