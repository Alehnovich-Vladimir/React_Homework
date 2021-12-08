import React, { Component } from 'react';

class Posts extends Component {
    
  componentDidMount = () => {
    this.getPosts();  
    }

    getPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data })
            })
    }
    
    render() {
        return (
            <div>
                {this.state.posts.map((item) => {
                    return (
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <span>{item.body}</span>
                        </div>
                    )
                })}
            </div>
        )
    }  
}

// const Posts = () => {

//     const getPosts = () => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .then(data => {
//         console.log(data)
//         })
//     }
//     render() {
//         return (
//             <div>
//                 loading
//             </div>
//         )
//     }
// }

 export default Posts;
