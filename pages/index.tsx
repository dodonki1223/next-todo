import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

const Home = () => {
  const [count, setCount] = useState(0);
  const [displayName, setDisplayName] = useState('');
  const handleAddClick = () => {
    setCount((prevCount) => prevCount + 1)
  };

  // count が変更されるたびに useEffect が実行されます
  useEffect(() => {
    if (count !== 0 && count %3 === 0) {
      setDisplayName('3の倍数！！！');
    } else {
      setDisplayName('');
    }
  }, [count])

  // 依存するものを渡さないとDOMが作成された時に１度だけ実行されるものになる
  // Vue.js でいう mounted になります
  useEffect(() => {
    const getName = async () => {
      const name = await fetch('/api/hello').then((res) => 
        res.json().then((data) => data.name)
      );
      setDisplayName(name);
    }
    // void の意味は返り値はなしですよという意味です
    // void はなくても実際に動きます
    void getName()
  }, [])

  return (
    <div style={{ margin: '64px'}}>
      Home
    <div>{count}</div>
    <button type='button' onClick={handleAddClick}>
      Add!
    </button>
    <h2>{displayName}</h2>
    </div>
  )
}

export default Home
