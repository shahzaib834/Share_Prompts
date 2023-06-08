'use client';

import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    //@ts-ignore
    setPosts(JSON.parse(localStorage.getItem('post')));
    console.log(posts);
  }, []);

  const PromptCardList = ({ data, handleTagClick }: { data: any, handleTagClick: any }) => {
    return (
      <div className='mt-16 prompt_layout'>
        {data?.map((post: { prompt: string; tag: string }) => (
          <PromptCard post={post} handleTagClick={handleTagClick} />
        ))}
      </div>
    );
  };

  const filterPrompts = (searchtext: any) => {
    const regex = new RegExp(searchtext, 'i'); // 'i' flag for case-insensitive search
    return posts?.filter(
      (item: any) => regex.test(item?.tag) || regex.test(item?.prompt)
    );
  };

  const handleTagClick = (tagName: string) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  const handleSearchChange = (e: any) => {
    // @ts-ignore
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      // @ts-ignore
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
