"use client"
import Link from "next/link";
import TextareaAutosize from 'react-textarea-autosize';
import { useEffect, useState } from "react";

export default function Page() {
  const [table, setTable] = useState()

  const columns = ["Kupac SKU", "Kupac traži", "Dobavljač SKU", "Dobavljač količina", "Dobavljač cijena"]
  let dat = []

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }


  let gettingValue = function gettingValue(data: string, placeholder: string) {
    goToTop()
    // console.log(data)
    let arr = data.split("\n")
    // console.log(arr)
    // console.log(placeholder)
    if (placeholder === "Kupac SKU" || placeholder === "Dobavljač SKU") {
      arr.forEach((e, index) => {
        arr[index] = e.replace(/GH\d*-/gi, '').split(/\W+/).join(" ");
        // console.log(e)
      })
    }
    // console.log(arr)
    dat.push({
      col: placeholder,
      data: arr
    })
    // console.log(dat)

    compare(dat)

  }

  let compare = function gettingValue(dat: []) {
    let res: boolean[] = new Array()
    // console.log(dat)
    if (dat.some(e => e.col === 'Kupac SKU') && dat.some(e => e.col === 'Kupac traži') && dat.some(e => e.col === 'Dobavljač SKU') && dat.some(e => e.col === 'Dobavljač količina') && dat.some(e => e.col === 'Dobavljač cijena')) {

      // console.log(true)
      dat.forEach(e => {
        e.data.forEach((d, index) => {
          // d.includes(" ") ? console.log(true) : console.log(false)
          d.includes(" ") ? d = d.split(" ") : d = [d]
          // console.log(d)
          e.data[index] = d
        })
      })

      let dobColA
      let kupColA

      dat.forEach(e => {
        if (e.col === 'Dobavljač SKU') {
          dobColA = e.data
        }
        if (e.col === 'Kupac SKU') {
          kupColA = e.data
        }
      })




      // console.log(dobColA)
      // console.log(kupColA)

      dobColA.forEach((dob, dobIndex) => {
        kupColA.forEach((kup, klupIndex) => {
          const found = dob.some(r => kup.includes(r))
          if (found) { res.push([found, dobIndex + 1, klupIndex + 1, dob, kup]) }
          // console.log(found, index + 1, index2 + 1, dob, kup)
        })
      })
      // console.log(res)

    }

    if (res.length > 1) {
      let kupacTrazi
      let dobavljacKolicina
      let dobavljacCijena

      dat.forEach((da, index) => {
        if (da.col === 'Kupac traži') {
          kupacTrazi = da.data
          // console.log(da.data)
        }
      })

      dat.forEach((da, index) => {
        if (da.col === 'Dobavljač količina') {
          dobavljacKolicina = da.data
          // console.log(da.data)
        }
      })

      dat.forEach((da, index) => {
        if (da.col === 'Dobavljač cijena') {
          dobavljacCijena = da.data
          // console.log(da.data)
        }
      })

      // console.log(kupacTrazi)
      res.forEach((re, index) => {
        let i = (re[2] - 1)
        re.push(kupacTrazi[i])

        let i2 = (re[1] - 1)
        re.push(dobavljacKolicina[i2])
        re.push(dobavljacCijena[i2])
      })

    }
    // finale
    if (res.length > 1) {
      console.log(res)
      setTable(res)
      res.forEach((e, i) => {
        e[3] = e[3].join(" / ")
        e[4] = e[4].join(" / ")

      })
    }

  }


  return (
    <div>
      <div className="header center padd">
        <h1>USPOREDBA 1</h1>
        <Link href="/indexpage">NAZAD</Link><br />
        <table className="padd center">
          <tbody>
            <tr>
              <th>Kup Red</th>
              <th>Kupac SKU</th>
              <th>Kupac traži</th>
              <th>Dob Red</th>
              <th>Dobavljač SKU</th>
              <th>Dobavljač količina</th>
              <th>Dobavljač cijena</th>
            </tr>
            {table ? table.map((val, key) => {

              return (
                <tr key={key}>
                  <td>{val[2]}</td>
                  <td>{val[4]}</td>
                  <td>{val[5]}</td>
                  <td>{val[1]}</td>
                  <td>{val[3]}</td>
                  <td>{val[6]}</td>
                  <td>{val[7]}</td>
                </tr>
              )
            }) : null}
          </tbody>
        </table>
      </div>
      <div className="fullFlexContainer">
        {columns.map((col, index) =>
          <TextareaAutosize placeholder={col} key={index} rows={4} cols={20} className="full padd" onChange={(e) => gettingValue(e.target.value, e.target.placeholder)} />
        )}

      </div>
    </div >
  );
}
