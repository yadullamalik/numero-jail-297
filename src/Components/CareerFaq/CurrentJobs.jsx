import React from 'react';
import styles from "../styles/CurrentJobs.modules.css";
import Faq from './Faq';
import InsideScoop from './InsideScoop';


const CurrentJobs = () => {
  return (
    <div>
        <div className='sd1'>
        <div className='make'>
        <h2>Make cool stuff. From anywhere.</h2>
        <p>Fully remote since 2014</p>
        <button className='btn1'>See job openning</button></div>
        </div> <div className='sd2'>
            <div className='toggl'>Toggl, explained.</div>
            <br/>
            <div className='heading'>Toggl is the shared brand for Track, Plan, and Hire. Three different products. Three related, but independent companies. All three companies share the same mission—to eliminate stress from the workplace.
            <br/>
            <br/>Trust and respect are values mutually shared across all three companies. But each of Toggl’s companies nurtures its own culture, processes, and values.
            <br/>
            <br/>Working at Toggl means dedicating your time to one Toggl product and company and becoming part of its unique microcosm, one that prospers inside Toggl.</div>
           <img className='map' src="https://public-assets.toggl.com/b/static/539bf9fcd3dfc2f6d1320cbd8151ceeb/dff74/map-of-togglers.png"/>
        </div>
        <div className='sd3'>
            <div className='fully-remote'>Fully Remote</div>
            <p className='full'>Our amazing team works from 40+ countries around the globe. We hire globally, you work locally</p>
            <p className='name'>1 position</p>
            <h2 className='software'>Software Development</h2>
            <div className='box1'>
                <p className='back-end'>Backend Developer</p>
                <p className='para1'>We are looking for a passionate and sharp Backend Developer to be a part of one of our cross-functional product development teams to help us shape the future of the time tracking industry and deliver real value to our customers with both new and improved features.</p>
                        </div>
        </div>
        <div className='sd4'>
           <h1 className='heading3'>How We Work</h1>
           <p className='heading4'>Toggl is proudly a fully remote company. We believe that with a global team comes a whole world of creativity.</p>
           <div className='box2'><h5 className='heading5'>Open communication</h5>
           <p className='para2'>Communication is to remote work what oxygen is to life. We are open and collaborative. At our weekly all-hands video calls, we share project updates and learn new skills from each other on topics ranging from online marketing to making sauerkraut.</p>
           </div>
           
           <div className='box4'><h5 className='heading5'>Constant improvement</h5>
           <p className='para2'>We go the extra mile for our teammates, just as we do for our customers. We encourage each other to step outside our comfort zones and recognize that mistakes are an opportunity to learn and grow. We expect team members to move between departments and roles as skill sets and business needs evolve over time.</p>
           </div>
           <div className='box3'><h5 className='heading5'>Strong teamwork</h5>
           <p className='para2'>We are one hell of a team. We work for common goals and always have each others' backs. Every few months, we travel to meet up and spend quality time together. This keeps our ties strong and helps us see the human faces behind the Slack avatars.</p>
           </div>
           <div className='box5'><h5 className='heading5'>Kindness & building relationships</h5>
           <p className='para2'>Working in a distributed team can sometimes feel lonely, but not at Toggl. The digital nomads travel the world together. The foodies share recipes for cooking. The sporty Togglers support each other in being active and reaching personal milestones. Our PC and console gamers co-exist peacefully.</p>
           </div>
           <div className='box6'>
            <img className='img-heart' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMwIiBoZWlnaHQ9IjEyMyIgdmlld0JveD0iMCAwIDEzMCAxMjMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtYXNrIGlkPSJtYXNrMF8xMV83MCIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxMjMiPgo8cGF0aCBkPSJNMTI5LjgyNiAzMC42ODI4QzEyOC4wOTMgMTMuNDQ3NiAxMTMuNjkzIDAgOTYuMTg0MiAwQzgyLjE1MDggMCA3MC4xMTkyIDguNjM4NzIgNjUgMjAuOTM5M0M1OS44ODA4IDguNjM4NzIgNDcuODQ5MiAwIDMzLjgxNzEgMEMxNi4zMDcyIDAgMS45MDU4MSAxMy40NDc2IDAuMTc0MTg3IDMwLjY4MjhDMC4wNTg1MDA1IDMxLjgzMTEgMCAzMi45OTc5IDAgMzQuMTc4QzAgNzUuNzA0MiA1MC40MjQyIDk1LjMwMzcgNjUgMTIzQzc5LjU3NTggOTUuMzA1MSAxMzAgNzUuNzA1NSAxMzAgMzQuMTc4QzEzMCAzMi45OTc5IDEyOS45NDIgMzEuODMxMSAxMjkuODI2IDMwLjY4MjhaIiBmaWxsPSIjNTZDQ0YyIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8xMV83MCkiPgo8cmVjdCB4PSItNTIuMjk2NCIgeT0iNTkuNDkzOSIgd2lkdGg9IjE3NiIgaGVpZ2h0PSI1MC40MzEiIHRyYW5zZm9ybT0icm90YXRlKC00Mi43NSAtNTIuMjk2NCA1OS40OTM5KSIgZmlsbD0iI0E4NzZGNSIvPgo8cmVjdCB4PSI4IiB5PSIxMjMuNDY5IiB3aWR0aD0iMTc2IiBoZWlnaHQ9IjQwLjYwMjgiIHRyYW5zZm9ybT0icm90YXRlKC00Mi43NSA4IDEyMy40NjkpIiBmaWxsPSIjRkY4OTdBIi8+CjxyZWN0IHg9Ii0xNy45MDc3IiB5PSI5Ny4wMjc4IiB3aWR0aD0iMTc1IiBoZWlnaHQ9IjM4LjExMzciIHRyYW5zZm9ybT0icm90YXRlKC00Mi43NSAtMTcuOTA3NyA5Ny4wMjc4KSIgZmlsbD0iI0U1N0NEOCIgc3Ryb2tlPSIjMkMxMzM4Ii8+CjxlbGxpcHNlIGN4PSI3OS44IiBjeT0iMTUiIHJ4PSIxNiIgcnk9IjE1IiBmaWxsPSIjRTU3Q0Q4Ii8+CjwvZz4KPC9zdmc+Cg=="/>
            <p className='para3'>Curious about our culture and how we work?</p>
            <div className='btn2'><button className='btn3' >Explore more</button></div>
 </div>
<div className='sd5'>
  <div className='Faq-div'><Faq/></div>
  <div className='sd6'><InsideScoop/></div>
</div>

        </div>
        
    </div>
  )
}

export default CurrentJobs
