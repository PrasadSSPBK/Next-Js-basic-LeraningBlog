import React from 'react';
// import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css'
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'


function BlogDetails(props) {
    const {blogDetailsPage}=props
    // console.log(blogDetailsPage)
   


    return (

    <div className={styles.main}>
          
        {blogDetailsPage.map((eachItem)=>{
            return(
               
                
               <div key={eachItem.id}>
                <Card className={styles.card}>
                    <Card.Title className={styles.blogDetails}>Welcome to  {eachItem.title.toUpperCase() } Tutorial {}</Card.Title>
                      <Image className={styles.img} src={eachItem.imageUrl}  width={300} alt="jsImg" 
        height={200}/>
                      <Card.Body>
        
        <Card.Text className={styles.desc}>
         {eachItem.description}
        </Card.Text>
       
      </Card.Body>
                </Card>
                <Link href="/">
              <Button variant="primary" className={styles.btn}>Go To Home</Button>
              </Link>
        
                </div> 
            )
        })}
         
            </div>

  )
}

export default BlogDetails

export  async function getServerSideProps(context){
    const {params}=context

   
    const response=await fetch(`http://localhost:4000/courses?title=${params.blogId}`,)
    const data=await response.json()
    return{
        props:{
            blogDetailsPage:data,
           
       }
    }

}