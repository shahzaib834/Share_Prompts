'use client';

import Form from '@/components/Form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CreatePrompt = () => {
  const router = useRouter();
  const [post, setPost] = useState({ prompt: '', tag: '' });

  const createPrompt = async (e: any) => {
    e.preventDefault();

    // @ts-ignore
    let posts = JSON.parse(localStorage.getItem('post'));

    if (posts) {
      posts.push(post);
      localStorage.setItem('post', JSON.stringify(posts));

      router.push('/');

      return;
    }

    let newPostsArray = [];
    newPostsArray.push(post);
    localStorage.setItem('post', JSON.stringify(newPostsArray));
    router.push('/');
  }
  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
