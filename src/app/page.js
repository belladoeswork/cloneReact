"use client"

import Instructions from '@/components/Instructions.jsx'
import Vicky from '@/components/Vicky.jsx'

import styles from './page.module.css'

export default function Home() {
  return (
    <main >
      <Instructions />
      <div >
        <Vicky />
      </div>
    </main>
  )
}
