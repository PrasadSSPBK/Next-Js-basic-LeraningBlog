import React from 'react'
import Card from 'react-bootstrap/Card';
import styles from '../styles/About.module.css'
// import Button from 'react-bootstrap/Button';
import Link from 'next/link'




function About
({blogs}) {
  return (
    <div className={styles.container} >
     <Card className={styles.card}>
      <Card.Body>
        <Card.Title className={styles.head}>About Website</Card.Title>
         <Card.Text>
       We want to be your biggest resource. Whether you are new to faith or new to Newbreak, you can choose the Next Steps course and learn how your new faith intersects with your life. If you are looking to explore a little more about this faith and how you may play a larger role in the church and how we engage our community, then Discovering Your Pathway is the course for you.
        </Card.Text>

      </Card.Body>
     </Card>
      <Card className={styles.card}>
      <Card.Body>
        <Card.Title className={styles.head}>Our Courses</Card.Title>
         <Card.Text>
      
       
                  {blogs.map((eachBlog)=>{
                    return(<ul key={eachBlog.id}  className={styles.ul} >
                      <li >
                     <Link href={`/blog/${eachBlog.title}`} >
                <a className={styles.link}> Learn {eachBlog.title}</a>
                
            </Link>
            </li>
                  </ul>)

                  })}

        </Card.Text>

      </Card.Body>
     </Card>
      <Card className={styles.card}>
      <Card.Body>
        <Card.Title className={styles.head}>Our Featured Course: Next Steps</Card.Title>
         <Card.Text>
      Do you have a desire to grow in your faith but don’t know what to do next? Our Next Steps Class is a short 4-session video course meant to share with you the heart-beat of Newbreak Church. By learning about who we are, we hope to empower you to have clear and tangible next steps to act as a catalyst for your faith.
       
        
        </Card.Text>

      </Card.Body>
      {/* <Link href="/blog">
              <Button variant="primary" className={styles.btn}>Go To Blog</Button>
              </Link> */}
     </Card>
    </div>
  )
}

export default About
export async function getServerSideProps(){
    const response=await fetch("http://localhost:4000/courses")
    const data=await response.json()
 
    return{
        props:{
            blogs:data,
        }
    }
}
