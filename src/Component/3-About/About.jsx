import './About.css'

const About = () => {
  return (
    <div className='about' id='About'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">

            <div className="abut-right">
                <div className="about-para">
                    <p>As a passionate Frontend Developer, I specialize in creating visually appealing and highly interactive websites and applications. With a solid foundation in HTML, CSS, and JavaScript, I am proficient in modern frontend frameworks like React, which allow me to build dynamic and responsive user interfaces. I thrive on turning design concepts into fully functional, seamless experiences, ensuring that every project I work on is not only user-friendly but also optimized for performance and accessibility. My attention to detail, coupled with a strong understanding of the latest web development trends, helps me deliver high-quality results that exceed client expectations.</p>
                    <p>In addition to my technical expertise, I am committed to continuous learning and staying updated with the latest industry advancements. I enjoy collaborating with cross-functional teams and participating in agile workflows to bring innovative solutions to life. Whether it&apos;s improving the user experience, optimizing web performance, or implementing best practices in code structure, I am driven by the desire to create products that leave a lasting impression. My goal is to combine my creative and technical skills to build meaningful digital experiences that are both aesthetically pleasing and functionally robust.</p>
                </div>
             </div>
            <div className="about-achievements">
                <div className="achievement">
                    <h1>3+</h1>
                    <p>Years of Experience</p>
                </div>
                <hr/>
                <div className="achievement">
                    <h1>30+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr/>
                <div className="achievement">
                    <h1>15+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
           
        </div>
      
    </div>
  )
}

export default About
