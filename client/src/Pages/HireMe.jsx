import React from 'react';
import Header from '../Components/Header.jsx';

function HireMe() {
  return (
      <>
          <Header/>
    <div className='text-white list-disc decoration-neutral-50'>
      <h1>Hire Me as Your Web Developer</h1>
      <p>Hello there! I'm thrilled at the prospect of joining your team as a web developer. Below are my skills, experiences, and what I can bring to your projects.</p>

      <h2>Skills:</h2>
      <ul className='flex flex-col items-start list-disc justify-start'>
        <li>Proficient in HTML, CSS, JavaScript (ES6+)</li>
        <li>Experience with popular frontend frameworks/libraries like React.js, Vue.js</li>
        <li>Strong understanding of responsive web design and mobile-first principles</li>
        <li>Experience with backend technologies such as Node.js, Express.js</li>
        <li>Familiarity with version control systems like Git</li>
        <li>Experience with databases (SQL and NoSQL)</li>
        <li>Ability to work with RESTful APIs and third-party services</li>
        <li>Experience with build tools like Webpack, Babel</li>
        <li>Good understanding of web performance optimization techniques</li>
        <li>Experience with testing frameworks like Jest, Enzyme</li>
      </ul>

      <h2>Experience:</h2>
      <p>I have worked on a variety of projects, including:</p>
      <ul>
        <li>Creating responsive and user-friendly websites for clients in various industries</li>
        <li>Building web applications from scratch using modern frontend and backend technologies</li>
        <li>Optimizing website performance to improve load times and user experience</li>
        <li>Collaborating with designers and other developers to bring projects to life</li>
        <li>Providing ongoing maintenance and support for existing web applications</li>
      </ul>

      <h2>Education:</h2>
      <p>I hold a degree in Computer Science or relevant field. Additionally, I continuously engage in self-learning and stay updated with the latest web development trends and technologies.</p>

      <h2>Why Hire Me?</h2>
      <p>I am passionate about creating high-quality, efficient, and visually appealing web applications. I am dedicated to meeting deadlines and exceeding expectations. With my strong problem-solving skills and attention to detail, I am confident in my ability to contribute positively to your projects.</p>

      <h2>Contact Me:</h2>
      <p>If you're interested in working together or have any questions, please feel free to reach out to me at my email address: your.email@example.com</p>
    </div>
    </>
  );
}

export default HireMe;
