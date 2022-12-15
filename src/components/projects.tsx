import React, { useEffect, useState } from 'react'
import { IRepo } from './types/gitHubData';
import {BsGithub} from 'react-icons/bs'
import styles from './projects.module.scss'


type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {

  const endpoint = "https://api.github.com/users/m1kajuhani/repos";
  const [githubData, setGithubData] = useState<IRepo[]>([]);

  useEffect(() => {
    fetch(endpoint)
      .then(x => x.json())
      .then(x => setGithubData(x))
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {
          githubData && githubData.map(x => (
            <div key={x.id} className={styles.box}>
              <h4 className={styles.title}>{x.name}</h4>
              <h5 className={styles.text}>{x.description}</h5>
              <a href={x.html_url} target="_blanc" rel='noreferrer'><h4 className={styles.projectLinks}><span>Go to GitHub</span></h4><BsGithub/></a>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Projects
