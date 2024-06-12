'use client';
import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import data from "./users.json"
import toast, { Toaster } from 'react-hot-toast';
import logo from './logo.png'
import GlobalConifg from './app.config.js'


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
      if (JSON.stringify(e) === JSON.stringify(formDataObj)) t = true
    })

    !t ? toast.error('Krivi podaci', {
      id: 'success1',
    }) : router.push('/indexpage')
  }


  return (
    <div className="center">
      <div className="header">
        <Image
          width={151}
          height={48}
          src={logo}
          alt="Logo"
          style={imageStyle}
        />
        <h1>MOBIDOM TOOLS</h1>


        <div className="center padd">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="User" required />
            <input type="password" name="password" placeholder="Password" required />
            <button className="padd" type="submit">LOGIN</button>
          </form>
        </div>
      </div>
      <Toaster position="top-right" toastOptions={GlobalConifg.toastOptGlobalConfig} />
    </div >
  );
}
