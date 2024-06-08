"use client"
import Link from "next/link";
import TextareaAutosize from 'react-textarea-autosize';

export default function Page() {
  return (
    <div>
      <div className="header center padd">
        <h1>USPOREDBA 1</h1>
        <Link href="/indexpage">NAZAD</Link><br />
      </div>
      <div className="fullFlexContainer">
        <TextareaAutosize placeholder="Kupac kolumna A" rows={4} cols={20} className="full padd" onChange={e => console.log(e.target.value)} />
        <TextareaAutosize placeholder="Kupac kolumna B" rows={4} cols={20} className="full padd" onChange={e => console.log(e.target.value)} />
        <TextareaAutosize placeholder="Kupac kolumna c" rows={4} cols={20} className="full padd" onChange={e => console.log(e.target.value)} />
        <TextareaAutosize placeholder="Dobavljač kolumna A" rows={4} cols={20} className="full padd" onChange={e => console.log(e.target.value)} />
        <TextareaAutosize placeholder="Dobavljač kolumna B" rows={4} cols={20} className="full padd" onChange={e => console.log(e.target.value)} />
        <TextareaAutosize placeholder="Dobavljač kolumna C" rows={4} cols={20} className="full padd" onChange={e => console.log(e.target.value)} />
      </div>
    </div >
  );
}
