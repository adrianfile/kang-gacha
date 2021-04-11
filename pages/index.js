import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  
  var [percent, setPercent] = useState(0)
  var [result, setResult] = useState("Belum Mencoba Gacha")
  var AuthButton

  const handleClick = event => {
    
    event.preventDefault()
    setPercent(Math.floor(Math.random() * 100))
    console.log(percent)
    setResult("Belum Mencoba Gacha")
  }

  const chanceWinnings = event => {
    event.preventDefault()
    let chanceArray = []
    for(var i = 0; i < 100; i++) {
      if(i <= percent) {
        chanceArray.push('Menang 🎉')
      } else {
        chanceArray.push('Kalah 😓')
      }
    }
    let result = chanceArray[Math.floor(Math.random() * chanceArray.length)]
    setResult(result)
    console.log(result)
  }
  

  if(percent === 0) {
     AuthButton = <button className="block px-5 rounded-full border-indigo-800 mt-10 border mx-auto justify-center" 
                      onClick={handleClick}>
                      Click on me
                  </button>
    
  } else {
    AuthButton = <><button className="block px-5 rounded-full border-indigo-800 mt-10 border mx-auto justify-center"
                           onClick={chanceWinnings}>
                    Apakah bisa dapat hadiah ?
                  </button>
                  <button className="block px-5 rounded-full border-indigo-800 mt-10 border mx-auto justify-center" 
                          onClick={handleClick}>
                    Ulangi ?
                  </button>
                </>
  }

  return (
    <div class="my-64">
      <div>
        <Head>
          <title>Gacha</title>
        </Head>
      </div>
      <div className="block">
          <p className="text-center">Apakah wangi atau tidak tangan kalian untuk ngegacha ?</p>
          <div className="mx-auto mt-10 border border-blue-600 rounded-full h-32 w-32 ">
            <p className="my-11 text-center text-2xl">{percent}%</p>
          </div>
          <p className="pt-5 text-center">Kamu {result}</p>
          {AuthButton}
          
      </div>
    </div>
  )
}
