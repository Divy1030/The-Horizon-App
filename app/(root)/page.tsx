import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import ToatalBalanceBox from '@/components/TotalBalanceBox'
import { emit } from 'process'
import React from 'react'


const Home = () => {

  const loggedIN={firstName:"Divy" , lastName:"Rai",email:"raidivy301@gmail.com"}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIN?.firstName || "Greetings!"} 
          subtext="Acess and manage your account 
           more easily with our new online banking platform."
          />
          <ToatalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1234.56}
          />
        </header>
        Recent Transactions
      </div>
      <RightSideBar 
      user={loggedIN}
      transactions={[]}
      banks={[{currentBalance:1237},{currentBalance:5046}]}
      />
    </section>
  )
}

export default Home