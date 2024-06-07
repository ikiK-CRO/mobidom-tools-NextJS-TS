'use client';
import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import data from "./users.json"
import toast, { Toaster } from 'react-hot-toast';
import logo from './logo.png'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()

  const imageStyle = {
    backgroundColor: "white"
  }


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const password = formData.get('password')

    type users = {
      name: string;
      password: string;
    }

    const formDataObj: users = {
      name: name,
      password: password
    }


    let t = false
    Object.values(data)[0].forEach(e => {
      // console.log(JSON.stringify(e) === JSON.stringify(formDataObj))
      if (JSON.stringify(e) === JSON.stringify(formDataObj)) t = true
    })

    !t ? toast.error('Krivi podaci', {
      toastId: 'success1',
    }) : router.push('/indexpage')
  }


  return (
    <div>
      <div className="header center">
        <Image
          width={151}
          height={48}
          src={logo}
          alt="Logo"
          style={imageStyle}
        />
        <h1>Tools</h1>
      </div>

      <div className="center2">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="User" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
      <Toaster position="top-right" />
    </div >
  );
}
