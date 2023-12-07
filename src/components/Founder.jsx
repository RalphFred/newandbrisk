import heroImg from '../assets/heroImg.png'

export default function Founder() {
  return(
    <div className='px-8 py-8 lg:pb-12 lg:px-32 bg-cream flex flex-col lg:flex-row items-center'>
      <div className='w-full lg:w-2/5 mb-12 lg:mb-0'>
        <img src={heroImg} className='w-full lg:w-4/5 h-[400px] lg:h-[600px]' />
      </div>
      <div className='w-full lg:w-3/5 font-handlee text-xl'>
        <p className='mb-4'> 
        Meet <span className="font-semibold">Chef Nana</span>, the founder Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quisquam veritatis aut exercitationem vitae cupiditate, corrupti, totam dolorem tenetur, corporis qui sit distinctio reprehenderit! Tenetur nihil nostrum commodi libero ut!
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, cumque! Aspernatur, itaque nostrum. Aut sunt quisquam iusto autem quaerat molestias possimus. Iusto provident et iste, placeat optio eveniet voluptatem autem nisi expedita, deserunt ducimus magnam fugiat, facere sunt illo neque.</p>
      </div>
    </div>
  )
}