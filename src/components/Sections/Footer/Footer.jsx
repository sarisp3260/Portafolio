import Icons from './Icons'

const Footer = () => {
  return (
    <div className='text-black bg-gradient-to-b from-gray to-blue text-center px-5 py-10 md:px-10 ' id='Contact'>
        <span className='text-xl font-medium md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi expedita sunt voluptate sit quod magnam, magni iure! Facere, aliquam.</span>

        <Icons color='hover:text-black/80 hover:scale-125'/>

        <div className="copy-rights">
            <span className='text-xl font-semibold md:text-2xl'>SaraSalas.com &copy;Sara Salas. All Rigths Reserved</span>
        </div>
    </div>
  )
}

export default Footer