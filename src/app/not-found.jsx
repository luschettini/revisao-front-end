import React from 'react'
import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você procura não existe.</p>
      <Link href="/" className={styles.homeLink}>
        Voltar para a página inicial
      </Link>
    </div>
  )
}