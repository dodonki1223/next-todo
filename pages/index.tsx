import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

const Home = () => {
  const [count, setCount] = useState(0);
  const handleAddClick = () => {
    setCount((prevCount) => prevCount + 1)
  };

  return (
    <div style={{ margin: '64px'}}>
      Home
    <div>{count}</div>
    <button type='button' onClick={handleAddClick}>
      Add!
    </button>
    </div>
  )
}

export default Home
