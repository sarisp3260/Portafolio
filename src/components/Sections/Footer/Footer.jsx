import Form from '../Form'
import Icons from './Icons'

const Footer = () => {
  return (
    <div className='text-black bg-gradient-to-b from-gray to-blue text-center px-5 py-10 md:px-10 ' id='Contact'>
        
        <div className="container-footer grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 mb-10">
          <div className="left">
            <Icons color='hover:text-black/80 hover:scale-125'/>
          </div>
          <div className="right w-full space-y-5">
            <h1 className='text-5xl font-bold md:text-4xl'>Contact me!</h1>
            <Form/>
          </div>
        </div>


        <div className="copy-rights">
            <span className='text-xl font-semibold md:text-2xl'>SaraSalas.com &copy;Sara Salas. All Rigths Reserved</span>
        </div>
    </div>
  )
}

export default Footer