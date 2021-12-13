import { useState, useEffect } from 'react';
import './index.css';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Pages = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);
    
    const getPosts = async (post = 1) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${post}&_limit=10`);
        const data = await response.json();
        setPosts(data);
    }

    const buttonsList = pages.map((number, el) => {
        return (
          <button onClick={() => getPosts(number)} key={el}>
            {number}
          </button>
        );
      });

    return (
        <>
            <div className="posts">
                {posts.map((post) => {
                    return (
                        <div className="post" key={post.id}>
                            <img className="img" src={post.url} alt={post.title}></img>
                            <p>{post.title}</p>
                        </div>
                    )
                })}
            </div>
            <div className="button">
                {buttonsList}
            </div>
        </>)
}

export default Pages


