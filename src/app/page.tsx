'use client';
import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import data from "./users.json"

export default function Home() {

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    console.log(formData)
    console.log(data)


    // const response = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // })

    // if (response.ok) {
    //   router.push('/profile')
    // } else {
    //   // Handle errors
    // }
  }


  return (
    <div>
      <div className="header center">
        <h1>Hello, Index/Login page!</h1>
        <Link href="/indexpage">Log in</Link>

      </div>
      <div className="center2">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="User" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div >
  );
}
