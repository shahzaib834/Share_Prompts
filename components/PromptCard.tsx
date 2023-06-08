'use client';

import Image from 'next/image';
import { useState } from 'react';
import tickIcon from '@/assets/icons/tick.svg'
import copyIcon from '@/assets/icons/copy.svg'

interface PrompCardProps {
  post: { prompt: string; tag: string }
  handleTagClick: (tag: string) => void
}

const PromptCard: React.FC<PrompCardProps> = ({ post, handleTagClick }) => {
  const [copied, setCopied] = useState('');


  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
        setCopied('');
    }, 3000);
  }

  return <div className='prompt_card'>
    <div className='copy_btn' onClick={handleCopy}>
        <Image src={copied === post.prompt ? tickIcon : copyIcon} width={12} height={12} alt='copy' />
    </div>

    <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
    <p className='font-inter text-sm blue_gradient cursor-pointer' onClick={() => handleTagClick && handleTagClick(post.tag)}>#{post.tag}</p>
  </div>;
};

export default PromptCard;
