'use client';

import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/images/logo.svg';

const Nav = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          alt='Promptopia Logo'
          src={logo}
          height={50}
          width={50}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      <div>
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>
          </div>
      </div>
    </nav>
  );
};

export default Nav;
