import { useState, useCallback, useEffect, useRef } from "react"


function App() {

  const [length, setLength] = useState(8)
  const [numA, setnumA] = useState(false)
  const [charA, setcharA] = useState(false)
  const [password, setPassword] = useState('')
  //userRef hook
  const passRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numA) str += "0123456789"
    if (charA) str += "!@#$%^&*()_+"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)   //random number generate kr rha hai
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numA, charA, setPassword])     //passGenerator ko call krne pr ye 3 cheeze change hui toh passGenerator fir se chalega


  const copyPasswordtoClip = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,21)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {passGenerator()}, [length, numA, charA, passGenerator])  //calling function

  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white flex justify-center px-4 py-3 font-bold text-lg">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly ref={passRef}/>
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 active:bg-blue-300" onClick={copyPasswordtoClip}
        >copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e) => { setLength(e.target.value) }} /><label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charA}
              id="characterInput"
              onChange={() => {
                setcharA((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numA}
              id="characterInput"
              onChange={() => {
                setnumA((prev) => !prev)                    //true false bn jayega aur false true bn jayega
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
        </div>

      </div>

    </>
  )
}

export default App


/*Ye project ek password generator application hai jo React se banaya gaya hai.

useState hook ka use application ke state ko manage karne ke liye kiya gaya hai. Chaar state variables hain:

length - ye store karta hai ki generate hone wala password kitne characters ka hoga.
numA - ye ek boolean hai jo indicate karta hai ki kya password mein numbers allowed hain ya nahi.
charA - ye ek boolean hai jo indicate karta hai ki kya password mein special characters allowed hain ya nahi.
password - ye generated password ko store karta hai.
setLength, setnumA, setcharA, aur setPassword upar diye gaye state variables ke liye respective state update functions hain.

useRef hook ka use ek reference (passRef) banane ke liye kiya gaya hai. Isse directly ek DOM element ke saath interact kiya ja sakta hai.

useCallback hook ka use passGenerator function ko memoize karne ke liye kiya gaya hai. Iska matlab hai ki ye function har render pe re-create nahi hoga, balki sirf tab jab uske dependencies change honge. Agar ye function run karne me expensive hai ya agar ye ek prop ke roop me child components ko pass kiya ja raha hai aur unnecessary re-renders cause kar raha hai, to isse performance improve ho sakti hai.

useEffect hook ka use side effects run karne ke liye kiya gaya hai, jaise ki data fetch karna ya directly DOM update karna. Is case me, ye passGenerator function ko call kar raha hai jab length, numA, ya charA state change hota hai.

passGenerator function password generate karne ke liye responsible hai based on the current state. Is function ki actual implementation provided code me show nahi ki gayi hai.*/ 