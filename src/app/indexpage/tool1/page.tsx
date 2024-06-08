"use client"
import Link from "next/link";
import TextareaAutosize from 'react-textarea-autosize';

export default function Page() {

  let gettingValue = function gettingValue(data: string, placeholder: string) {
    console.log(data)
    let arr = data.split("\n")
    console.log(arr)
    console.log(placeholder)

  }

  return (
    <div>
      <div className="header center padd">
        <h1>USPOREDBA 1</h1>
        <Link href="/indexpage">NAZAD</Link><br />
      </div>
      <div className="fullFlexContainer">
        <TextareaAutosize placeholder="Kupac kolumna A" rows={4} cols={20} className="full padd" onChange={(e) => gettingValue(e.target.value, e.target.placeholder)} />
        <TextareaAutosize placeholder="Kupac kolumna B" rows={4} cols={20} className="full padd" onChange={(e) => gettingValue(e.target.value, e.target.placeholder)} />
        <TextareaAutosize placeholder="Kupac kolumna c" rows={4} cols={20} className="full padd" onChange={(e) => gettingValue(e.target.value, e.target.placeholder)} />
        <TextareaAutosize placeholder="Dobavljač kolumna A" rows={4} cols={20} className="full padd" onChange={(e) => gettingValue(e.target.value, e.target.placeholder)} />
        <TextareaAutosize placeholder="Dobavljač kolumna B" rows={4} cols={20} className="full padd" onChange={(e) => gettingValue(e.target.value, e.target.placeholder)} />
        <TextareaAutosize placeholder="Dobavljač kolumna C" rows={4} cols={20} className="full padd" onChange={(e) => gettingValue(e.target.value, e.target.placeholder)} />
      </div>
    </div >
  );
}
