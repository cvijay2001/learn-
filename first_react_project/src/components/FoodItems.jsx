function FoodItems({fruits}){
    return (
        <>
         <ul>
            {fruits.map((item) => (
              <li key={item} className="fruititems">{item}</li>
            ))}
          </ul>
        </>
    )
}

export default FoodItems;