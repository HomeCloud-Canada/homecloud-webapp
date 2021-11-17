import * as React from "react"
import propertyImage from '.././images/property_image.webp'
import ellipse from ".././images/Ellipse 6.png"

import "./index.css"

// markup
const IndexPage = () => {
  return (
    <div className="flex flex-col h-full bg-yellow-500">
      <header className="flex text-6xl justify-center h-1/6 pt-2 text-indigo-900 font-bold italic">HomeCloud</header>
      <main className="flex flex-row justify-around items-center h-4/6">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-semibold pb-10 text-indigo-900">Real Estate Solutions <br /> for you</h2>
          <button className="w-full py-6 bg-indigo-900 border-2 rounded-lg border-black text-3xl text-yellow-200 font-semibold">Request Access</button>
        </div>
        <div className="images">
          <img src={propertyImage} alt="" />
          <img className="circ" src={ellipse} alt="" />
        </div>
      </main>
      <footer className="flex justify-center items-end h-1/6 pb-2"></footer>
    </div>
  )
}

export default IndexPage


