import Title from "../Text/Title"
import CardPerson from '../Cards/CardPerson'

const Testimonials = () => {
  return (
    <div className='text-center py-16' id='Testimonials'>
        <Title title="Testimonials" />
        <div className='py-3 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 place-items-center justify-center'>
          <CardPerson/>
        </div>
    </div>
    
  )
}

export default Testimonials