import { Link } from "react-router-dom";
import styles from './App.module.css'

function App() {

  const projects = 
  [
    {name: "To Do App", link: '/ToDoApp'},
    {name: "Calculator", link: '/Calculator'},
    {name: "Weather App", link: '/WeatherApp'},
    {name: "Cryptocurrencies", link: '/Cryptocurrencies'}
  ]

  return (
    <div className={styles.projectsContainer}>
      {
        projects.map((project) => (
          <Link className={styles.links} to={project.link}>
            <ion-icon name="image"></ion-icon>
              <h1>{project.name}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt itaque quasi minus, sed magni molestias, deserunt veniam soluta id iure in aliquid ut fugit ea animi, et ipsa esse. Quaerat.</p>
          </Link>
        ))
      }
    </div>
  );
}

export default App;
