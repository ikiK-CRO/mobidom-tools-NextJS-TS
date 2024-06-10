"use client"
import Link from "next/link";
import TextareaAutosize from 'react-textarea-autosize';

export default function Page() {

  const columns = ["Kupac kolumna A", "Kupac kolumna B", "Kupac kolumna C", "Dobavljač kolumna A", "Dobavljač kolumna B", "Dobavljač kolumna C"]

  let gettingValue = function gettingValue(data: string, placeholder: string) {
    // console.log(data)
    let arr = data.split("\n")
    // console.log(arr)
    console.log(placeholder)
    arr.forEach((e, index) => {
      arr[index] = e.replace(/GH\d*-/gi, '').split(/\W+/).join(" ");
      // console.log(e)
    })
    console.log(arr.length)

  }

  return (
    <div>
      <div className="header center padd">
        <h1>USPOREDBA 1</h1>
        <Link href="/indexpage">NAZAD</Link><br />
      </div>
      <div className="fullFlexContainer">
        {columns.map((col, index) =>
          <TextareaAutosize placeholder={col} key={index} rows={4} cols={20} className="full padd" onChange={(e) => gettingValue(e.target.value, e.target.placeholder)} />
        )}
      </div>
    </div >
  );
}
