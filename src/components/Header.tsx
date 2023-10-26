import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'



const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.pagename}>都道府県別の総人口推移グラフ表示ページ</h2>
      {/* <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header