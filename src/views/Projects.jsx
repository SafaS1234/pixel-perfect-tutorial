import ProjectCard from '../components/ProjectCard'
import styles from './Projects.module.css'
import chat from '../assets/chat.png'
import sunrise from '../assets/sunrise.png'

const projectlist = [
  {
    title: "chat r3wind",
    website: "http://r3wind.chat/",
    img: chat,
    desc: "privacy based in browser app that gives you a Spotify like wrapped of your Whatsapp chats. All you need to do is upload your zip files and watch it visualize who texts first, who is biggest yapper and so much more!",
    uniqueId: 1
  },
  {
    title: "sunrise w sarv",
    website: "https://github.com/University-of-Illinois-Chicago/flask-react-demo/",
    img: sunrise,
    desc: "full stack application pulled weather from OpenWeatherMap API to calculate the probablity of seeing a good sunset based off of any location in the world",
    uniqueId: 2
  }
]

export default function Projects() {
  return (
    <div className={styles['main-container']} id='projects'>
      <h1>Here are a few apps I've built and tinkered with !</h1>
      <div className={styles['project-container']}>
        {projectlist.map((item) => {
          return (
            <ProjectCard title={item.title} img={item.img} desc={item.desc} link={item.website} id={item.uniqueId} />
          )
        })}

      </div>
    </div>
  )
}