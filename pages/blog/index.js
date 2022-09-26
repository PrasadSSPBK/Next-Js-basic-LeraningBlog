import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



import styles from '../../styles/Blog.module.css'

function Blog({blogs}) {
    // console.log(blogs)
  return (
     <div className={styles.main}>
    <div>
        {blogs.map(eachblog=>{
            return(
                  <div key={eachblog.id}>
                
        <div className={styles.first}>
             <div className={styles.img}>
            
            <Image  layout="fixed" width={200} alt="jsImg" 
        height={100} 
        src={eachblog.imageUrl}
        />
        </div>
     <div className={styles.second}>
        <h2>Learn  
            <Link href={`/blog/${eachblog.title}`}  >
                <a className={styles.link}>{eachblog.title.toUpperCase()}</a>
            </Link>
            </h2>
            <p>Click on the title to see more details</p>
        </div>
        </div>
         </div>
                 
            )

        })}
    </div>
    </div>
  )
}

export default Blog

export async function getServerSideProps(){
    const response=await fetch("http://localhost:4000/courses")
    const data=await response.json()
 
    return{
        props:{
            blogs:data,
        }
    }
}