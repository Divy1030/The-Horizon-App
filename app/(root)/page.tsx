import HeaderBox from '@/components/HeaderBox'
import ToatalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'


const Home = () => {

  const loggedIN={firstName:"Divy"}

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
      </div>
    </section>
  )
}

export default Home