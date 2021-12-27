import Post from "./Post"



function Posts() {

    const posts= [{
        id:'123',
        username:"Albin",
        userImg:"https://links.papareact.com/3ke",
        img:"https://links.papareact.com/3ke",
        caption:"Hello"
    }
]


    
    return (
        <div>
            { posts.map((post) => (
                    <Post key={post.id} username={post.username} img={post.img} userImg={post.userImg} caption={post.caption}/>

            )
            )
}
            
        </div>
    )
}

export default Posts
