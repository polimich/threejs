import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  // template_944ym59
  // service_3j1w01j
  // tJ29DJjjGJKN33maB
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_3j1w01j',
        'template_944ym59',
        {
          from_name: form.name,
          to_name: 'Michael',
          reply_to: form.email,
          to_email: 'michael.polivka1@gmail.com',
          message: form.message,
        },
        'tJ29DJjjGJKN33maB'
      )
      .then(
        (res) => {
          setLoading(false);
          alert('Message sent!, I will get back to you as soon as possible.');
          setForm({ name: '', email: '', message: '' });
        },
        (err) => {
          setLoading(false);
          console.log(err);
          alert('Something went wrong, please try again later.');
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] ]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
