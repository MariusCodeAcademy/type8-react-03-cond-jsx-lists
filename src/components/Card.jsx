function Card() {
  // jei isLarge === true tai pridedam klase 'text-large' jei ne tai ne
  const isLarge = true;
  return (
    <div className='card'>
      <h2 className='card-title'>Card title</h2>
      <p className=''>This is card body</p>
      <button>Read more</button>
    </div>
  );
}

export default Card;
