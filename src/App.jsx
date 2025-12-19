
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import { NavBar } from './assets/components/NavBar/NavBar'
import PricingOptions from './assets/components/PricingOptions/PricingOptions'

const PricingPromise = fetch('PricingData.json').then(res => res.json());

function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav>  */}
      </header>
      <main>
        <Suspense fallback={<span class="loading loading-spinner loading-lg"></span>}>
          <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
