import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.pagename}>都道府県別の総人口推移グラフ表示ページ</h2>
    </header>
  )
}

export default Header

