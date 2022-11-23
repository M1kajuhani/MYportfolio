import React, { useEffect, useState } from 'react'
import { IRepo } from './types/gitHubData';
import styles from './project.module.scss'


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
    <div className={styles.cont}>
      <div className={styles.list}>
        {
          githubData && githubData.map(x => (
            <div key={x.id} className={styles.box}>
              <h4 className={styles.title}>{x.name}</h4>
              <p className={styles.text}>{x.description}</p>
              <a href={x.html_url} target="_blanc" rel='noreferrer'><h4 className={styles.a}>Look it in GitHub</h4></a>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Projects