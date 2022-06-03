import React, { useRef,useState } from "react";
import emailjs from '@emailjs/browser';
import { FaAsterisk } from "react-icons/fa";
import {FaReact} from 'react-icons/fa';

const Form = () => {
  const form = useRef();

  const [send, setSend] = useState(false)

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_r8ut10q', 'template_v1h6aeq', form.current, '9D9HbNA3zP9Jggtx_')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");

      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="w-full center py-10 "> 
      <div className="w-11/12 bg-slate-500/50 rounded-md sm:w-3/4">
        <h1 className="text-center pt-5 text-2xl uppercase font-semibold font-mono">Send me a message</h1>
        <form
          className="w-full p-10 relative"
          ref={form} onSubmit={sendEmail}
        >
          <FaReact className="absolute text-xl -top-7 left-5 animate-wiggle"/>
          <FaReact className="absolute text-xl -top-7 right-5 animate-wiggle"/>
          <FaReact className="absolute text-xl bottom-7 left-5 animate-wiggle"/>
          <FaReact className="absolute text-xl bottom-7 right-5 animate-wiggle"/>
          <div className="relative">
            <input
              id="name"
              type="text"
              name="name"
              className="peer h-10 px-4 w-full border-b-4 rounded-xl bg-slate-500 border-transparent text-gray placeholder-transparent focus:outline-none focus:border-blue"
              placeholder="Full name"
              required
            />

            <div className="tag h-10 rounded-r-xl px-4 absolute right-0 top-0 flex items-center justify-center">
              <FaAsterisk className="text-xs text-red-500" />
            </div>

            <label
              htmlFor="name"
              className="absolute left-2 -top-7 text-gray-600 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-gray peer-focus:font-semibold peer-focus:text-lg"
            >
              Full name
            </label>
          </div>

          <div className="mt-10 relative">
            <input
              id="email"
              type="email"
              name="email"
              className="peer h-10 px-4 w-full border-b-4 rounded-xl bg-slate-500 border-transparent text-gray placeholder-transparent focus:outline-none focus:border-blue"
              placeholder="Email"
              required
            />

            <div className="tag h-10 rounded-r-xl px-4 absolute right-0 top-0 flex items-center justify-center">
              <FaAsterisk className="text-xs text-red-500" />
            </div>

            <label
              htmlFor="email"
              className="absolute left-2 -top-7 text-gray-600 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-gray peer-focus:font-semibold peer-focus:text-lg"
            >
              Email
            </label>
          </div>

          <div className="mt-10 relative">
            <input
              id="subject"
              type="text"
              name="subject"
              className="peer h-10 px-4 w-full border-b-4 rounded-xl bg-slate-500 border-transparent text-gray placeholder-transparent focus:outline-none focus:border-blue"
              placeholder="Subject"
              required
            />

            <div className="tag h-10 rounded-r-xl px-4 absolute right-0 top-0 flex items-center justify-center">
              <FaAsterisk className="text-xs text-red-500" />
            </div>

            <label
              htmlFor="subject"
              className="absolute left-2 -top-7 text-gray-600 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-gray peer-focus:font-semibold peer-focus:text-lg"
            >
              Subject
            </label>
          </div>

          <div className="mt-10 relative">
            <textarea
              id="message"
              type="text"
              name="message"
              className="peer h-10 px-4 pt-2 w-full border-b-4 rounded-xl bg-slate-500 border-transparent text-gray placeholder-transparent focus:outline-none focus:border-blue"
              placeholder="Description"
              required
            />

            <div className="tag h-10 rounded-r-xl px-4 absolute right-0 top-0 flex items-center justify-center">
              <FaAsterisk className="text-xs text-red-500" />
            </div>

            <label
              htmlFor="message"
              className="absolute left-2 -top-7 text-gray-600 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-gray peer-focus:font-semibold peer-focus:text-lg"
            >
              Message
            </label>
          </div>

          <div className="w-full center">
            <input
              className={`mt-10 px-4 py-2 rounded-xl  ${send !== true ? "bg-black" : "bg-green-600"} hover:bg-black/80 text-white font-semibold text-center w-1/2 focus:outline-none cursor-pointer`}
              type="submit"
              value={send !== true ? "Send" : "Successfuly sended"}
            />
          </div>
        </form>
      </div> 
    </div>
  );
};

export default Form;
