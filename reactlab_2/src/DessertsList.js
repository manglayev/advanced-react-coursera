function DessertsList(props)
{
  // Implement the component here.  
  const listItems = props.data.filter(lowCaloryDesserts).sort(sortByCalories).map(dessert =>
  {
    const listItem = `${dessert.name} - ${dessert.calories} cal`
    return <li>{listItem}</li>
  }
  )
  return(
    <ul>
      {listItems}
    </ul>
  );
}

function lowCaloryDesserts(dessert)
{
  return dessert.calories <= 500;
}

function sortByCalories(a, b)
{
  if (a.calories < b.calories)
  {
    return -1;
  }
  if (a.calories > b.calories)
  {
    return 1;
  }
  return 0;
}

export default DessertsList;
