import React, { useRef,useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const Form = () => {
  const form = useRef();

  // const apo = import.meta.env.VITE_KEY_SECRET_EMAIL
  // console.log(apo)

  const [send, setSend] = useState(false)
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_7tuhgub', 'template_4jugju2', form.current, '9D9HbNA3zP9Jggtx_')
      .then((result) => {
          setSend(true)

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',

            showConfirmButton: false,
            timer: 1800,
            timerProgressBar: true
          });

          setTimeout(() => {
            setSend(false)
          }, 3000);
          
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
  

  return (
    <div className="w-full center py-10 "> 
      <div className="w-11/12 sm:w-3/4">
        <h1 className="text-center pt-5 text-3xl uppercase font-semibold font-mono">Send me a message</h1>
        <form
          className="w-full p-10 relative space-y-9"
          ref={form} onSubmit={sendEmail} autoComplete="off"
        >
          <div className="relative">
            <input
              id="name"
              type="text"
              name="name"
              className="peer h-10 px-4 w-full rounded-sm outline outline-1 outline-[#35333edc] outline-offset-1 bg-transparent border-b-4 border-transparent text-gray placeholder-transparent focus:outline-none focus:border-blue"
              placeholder="Full name"
              required
            />

            <div className="tag h-10 rounded-r-xl px-4 absolute right-0 top-0 flex items-center justify-center">
              <FaAsterisk className="text-xs text-purplec" />
            </div>

            <label
              htmlFor="name"
              className="absolute left-2 -top-7 text-zinc-500 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-gray peer-focus:font-semibold peer-focus:text-lg"
            >
              Full name
            </label>
          </div>

          <div className="mt-10 relative">
            <input
              id="email"
              type="email"
              name="email"
              className="peer h-10 px-4 w-full rounded-sm outline outline-1 outline-[#35333edc] outline-offset-1 bg-transparent border-b-4 border-transparent text-gray placeholder-transparent focus:outline-none focus:border-blue"
              placeholder="Email"
              required
            />

            <div className="tag h-10 rounded-r-xl px-4 absolute right-0 top-0 flex items-center justify-center">
              <FaAsterisk className="text-xs text-purplec" />
            </div>

            <label
              htmlFor="email"
              className="absolute left-2 -top-7 text-zinc-500 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-gray peer-focus:font-semibold peer-focus:text-lg"
            >
              Email
            </label>
          </div>

          <div className="mt-10 relative">
            <input
              id="subject"
              type="text"
              name="subject"
              className="peer h-10 px-4 w-full rounded-sm outline outline-1 outline-[#35333edc] outline-offset-1 bg-transparent border-b-4 border-transparent text-gray placeholder-transparent focus:outline-none focus:border-blue"
              placeholder="Subject"
              required
            />

            <div className="tag h-10 rounded-r-xl px-4 absolute right-0 top-0 flex items-center justify-center">
              <FaAsterisk className="text-xs text-purplec" />
            </div>

            <label
              htmlFor="subject"
              className="absolute left-2 -top-7 text-zinc-500 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-gray peer-focus:font-semibold peer-focus:text-lg"
            >
              Subject
            </label>
          </div>

          <div className="mt-10 relative">
            <textarea
              id="message"
              type="textarea"
              rows={3}
              name="message"
              className="peer h-auto px-4 pt-2 w-full rounded-sm outline outline-1 outline-[#35333edc] outline-offset-1 bg-transparent border-b-4 border-transparent text-gray placeholder-transparent focus:outline-none focus:border-blue"
              placeholder="Description"
              required
            />

            <div className="tag h-10 rounded-r-xl px-4 absolute right-0 top-0 flex items-center justify-center">
              <FaAsterisk className="text-xs text-purplec" />
            </div>

            <label
              htmlFor="message"
              className="absolute left-2 -top-7 text-zinc-500 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-gray peer-focus:font-semibold peer-focus:text-lg"
            >
              Message
            </label>
          </div>

          <div className="w-full center">
            <input
              className={`mt-10 px-4 py-2 rounded-xl ease-in-out duration-200 ${send !== true ? "bg-purplec" : "bg-green-600 cursor-not-allowed hover:bg-green-700"} hover:bg-purplec/90 cursor-pointer text-white font-semibold text-center w-1/2 focus:outline-none 	`}
              type="submit"
              value={send !== true ? "Send" : "Successfuly sended"}
              disabled={send !== true ? false : true}
            />
          </div>
        </form>
      </div> 
    </div>
  );
};

export default Form;
