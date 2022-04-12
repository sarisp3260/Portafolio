import React from 'react'

const Form = () => {

  return (
    <form class="mt-12 bg-black/70 p-10 rounded-md" action="" method="POST">
        
        <div class="relative">
            <input id="name" type="text" name="name" class="peer h-10 px-4 w-full border-b-4 rounded-xl bg-gray/80 border-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-blue" placeholder="Full name" />

            <label for="name" class="absolute left-2 -top-7 text-gray-600 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-gray peer-focus:font-semibold peer-focus:text-lg">Full name</label>
        </div>

        <div class="mt-10 relative">
            <input id="subject" type="text" name="subject" class="peer h-10 px-4 w-full border-b-4 rounded-xl bg-gray/80 border-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-blue" placeholder="Subject" autoComplete='none'/>

            <label for="subject" class="absolute left-2 -top-7 text-gray-600 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-gray peer-focus:font-semibold peer-focus:text-lg">Subject</label>
        </div>

        <div class="mt-10 relative">
            <input id="longtext" type="text" name="longtext" class="peer h-10 px-4 w-full border-b-4 rounded-xl bg-gray/80 border-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-blue" placeholder="Description" />

            <label for="longtext" class="absolute left-2 -top-7 text-gray-600 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-gray peer-focus:font-semibold peer-focus:text-lg">Description</label>
        </div>

        <input type="sumbit" value="Sign in" class="mt-10 px-4 py-2 rounded-xl bg-black hover:bg-black/80 text-white font-semibold text-center w-full focus:outline-none cursor-pointer" />
    </form>
  )
}

export default Form