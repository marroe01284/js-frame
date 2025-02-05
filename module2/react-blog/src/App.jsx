import './App.css'
import {useEffect, useState} from 'react';


function App() {
    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts')) || []
    );

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    return <>
        <h1 className='text-3xl font-bold'>Hello World!</h1>
        <form action=''
              className='flex flex-col items-center max-w-sm mx-auto gap-2'
              onSubmit={(e) => {
                  // Grab the values
                  e.preventDefault();
                  const title = e.target.title.value;
                  const content = e.target.content.value;
                  console.log(title, content);
                  setPosts([
                      ...posts,
                      {
                          id: posts.length ? posts[posts.length - 1].id + 1 : 1,
                          title: title,
                          content: content,
                      },
                  ]);
              }}
        >
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' className='border'/>
            <label htmlFor='content'>Content</label>
            <input type='text' id='content' name='content' className='border'/>
            <button type="submit" className='bg-green-400 text-black p-2 rounded-2xl cursor-pointer'>Submit</button>
        </form>

        <div className='flex flex-col items-center gap-4 pt-4'>
            {posts.map((post) => {
                return (
                    <div className='border p-4' key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                );
            }).reverse()
            }
        </div>
    </>;
}

export default App
