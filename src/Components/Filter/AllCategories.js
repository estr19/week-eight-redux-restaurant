import Filter from "./Filter";

const AllCategories = () => {
  return (
    <div className='centered'>
      <h1>What are you hungry for?</h1>
      {['ALL', 'APPETIZERS', 'ITALIAN', 'SALADS', 'SEAFOOD'].map(category => <Filter category={category}/>)}
    </div>
  )
}

export default AllCategories;