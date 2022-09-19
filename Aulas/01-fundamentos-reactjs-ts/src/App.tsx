// JSX = Javascript + XML-(HTML)
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/MayconTrix.png',
      name: 'Maycon Batista',
      role: 'Senior Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'MayconTrix.design/doctorcare'}
    ],
    publishedAt: new Date('2022-09-05 13:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/luiscostalafc.png',
      name: 'Luis Costa',
      role: 'Senior FS Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'MayconTrix.design/doctorcare'}
    ],
    publishedAt: new Date('2022-09-03 13:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
               <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
               />
            )
          })}
        </main>
      </div>
    </div>
  )
}


