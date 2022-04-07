import CardPerson from '../Cards/CardPerson'

const Testimonials = () => {
  return (
    <div className='text-center py-16'>
        <h1 className='text-center text-5xl font-extrabold text-blue py-5 md:text-7xl'>Testimonials</h1>
        <div className='py-3 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 place-items-center justify-center'>
          <CardPerson/>
        </div>
    </div>
    
  )
}

export default Testimonials