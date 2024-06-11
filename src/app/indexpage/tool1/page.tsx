"use client"
import Link from "next/link";
import TextareaAutosize from 'react-textarea-autosize';

export default function Page() {

  const columns = ["Kupac kolumna A", "Kupac kolumna B", "Kupac kolumna C", "Dobavljač kolumna A", "Dobavljač kolumna B", "Dobavljač kolumna C"]
  let dat = []

  let gettingValue = function gettingValue(data: string, placeholder: string) {
    // console.log(data)
    let arr = data.split("\n")
    // console.log(arr)
    // console.log(placeholder)
    arr.forEach((e, index) => {
      arr[index] = e.replace(/GH\d*-/gi, '').split(/\W+/).join(" ");
      // console.log(e)
    })
    // console.log(arr)
    dat.push({
      col: placeholder,
      data: arr
    })
    // console.log(dat)
    compare(dat)
  }

  let compare = function gettingValue(dat: []) {
    // console.log(dat)
    if (dat.some(e => e.col === 'Kupac kolumna A') && dat.some(e => e.col === 'Dobavljač kolumna A')) {
      // console.log(true)
      dat.forEach(e => {
        // if (e.col === 'Kupac kolumna A') {
        e.data.forEach((d, index) => {
          // d.includes(" ") ? console.log(true) : console.log(false)
          d.includes(" ") ? d = d.split(" ") : d = [d]
          // console.log(d)
          e.data[index] = d
        })
        // }

      })

      let dobColA
      let kupColA

      dat.forEach(e => {
        if (e.col === 'Dobavljač kolumna A') {
          dobColA = e.data
        }
        if (e.col === 'Kupac kolumna A') {
          kupColA = e.data
        }

      })


      console.log(dobColA)
      console.log(kupColA)

      dobColA.forEach((dob, index) => {
        kupColA.forEach((kup, index2) => {
          const found = dob.some(r => kup.includes(r))
          console.log(found, index + 1, index2 + 1, dob, kup)
        })
      })
    }
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
