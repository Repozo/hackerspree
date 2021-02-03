import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './styles.css'
import logo from './logo.png';

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>
      <div className="to_do">
      <div class="area1" >
            <ul class="circles">
                    <li className="circle1"></li>
                    <li className="circle1"></li>
                    <li className="circle1"></li>
                    <li className="circle1"></li>
                    <li className="circle1"></li>
                    <li className="circle1"></li>
                    <li className="circle1"></li>
                    <li className="circle1"></li>
                    <li className="circle1"></li>
                    <li className="circle1"></li>
            </ul>
            <div >
              <img className="to_do_logo" src={logo} alt="error"/>
          </div>
          <div className="to_do_head1">WHAT'S HACKATHON?</div>
          <div className="to_do_content1">A Hackathon is a form of rapid prototyping organised to develop solutions in a safe environment and expedited time frame.In the spirit of friendly competition,startup teams deliver their results to a concrete task in &lt;48 hours</div>
    </div >
          
      </div>
  </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>
      <div className="to_do">
      <div class="area2" >
            <ul class="circles">
                    <li className="circle2"></li>
                    <li className="circle2"></li>
                    <li className="circle2"></li>
                    <li className="circle2"></li>
                    <li className="circle2"></li>
                    <li className="circle2"></li>
                    <li className="circle2"></li>
                    <li className="circle2"></li>
                    <li className="circle2"></li>
                    <li className="circle2"></li>
            </ul>
            <div className="to_do_head2">
              Types Of Hackathons
          </div>
          <div class="container">
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      </div>
      <div class="card-info">
        <h2 class="card-title">Ideation Hackathon</h2>
        <p class="card-intro">Creative Hackathon in which new product and services prototype,primarily aimed at customers,are developed.</p>
      </div>
    </div>
  </div>
  <div class="cards">
    <div class="card-item">
      <div class="card-image">
      </div>
      <div class="card-info">
        <h2 class="card-title">Problem-Solving Hackathon</h2>
        <p class="card-intro">Hackathon on which startups work on pre-defined,real life challenges and ensure the development of prototypes that directly address the challenges.</p>
      </div>
    </div>
  </div>
 
</div>
    </div > 
      </div>
      </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'white',fontSize:'20px' }}>
      <div className="to_do">
      <div class="area3" >
            <ul class="circles">
                    <li className="circle3"></li>
                    <li className="circle3"></li>
                    <li className="circle3"></li>
                    <li className="circle3"></li>
                    <li className="circle3"></li>
                    <li className="circle3"></li>
                    <li className="circle3"></li>
                    <li className="circle3"></li>
                    <li className="circle3"></li>
                    <li className="circle3"></li>
            </ul>
            <div className="to_do_head3">
        WHY HACKATHON?
    </div>
    <section id="timeline">
  
  <div class="tl-item">
    <div class="tl-year">
      <p class="f2 heading--sanSerif">1</p>
    </div>

    <div class="tl-content">
      <h1 class="f3 text--accent ttu">Prize</h1>
      <p>Cash And Goodies.</p>
    </div>
  </div>

  <div class="tl-item">
    <div class="tl-year">
      <p class="f2 heading--sanSerif">2</p>
    </div>
    <div class="tl-content">
      <h1 class="f3 text--accent ttu">Opportunity</h1>
      <p>Job and Internships.</p>
    </div>
  </div>
  <div class="tl-item">
    <div class="tl-year">
      <p class="f2 heading--sanSerif">3</p>
    </div>

    <div class="tl-content">
      <h1 class="f3 text--accent ttu">Experience</h1>
      <p>Get Projects Done Quick</p>
    </div>
  </div>
</section>

    </div >
    
    </div></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'black',fontSize:'20px' }}>
    <div class="area4" >
            <ul class="circles">
                    <li className="circle4"></li>
                    <li className="circle4"></li>
                    <li className="circle4"></li>
                    <li className="circle4"></li>
                    <li className="circle4"></li>
                    <li className="circle4"></li>
                    <li className="circle4"></li>
                    <li className="circle4"></li>
                    <li className="circle4"></li>
                    <li className="circle4"></li>
            </ul>
           <div className="to_do_head4">Virtual Hackathon Journey</div>
           <div className="content4">
             <br/>
             <br/>
             <br/>
           <div class="container3">
    <div class="card top_card">
      <h1>Step-1</h1>IDEA PPT SUBMISSION
    </div>
    <div class="card"><h1>Step-2</h1>WORKING VIDEO SUBMISSION</div>
    <div class="card middle_card">
      <h1>
        STEP-3
      </h1>
      VIDEO CALL PRESENTATION
    </div>
  </div>
           </div>
    </div >
      </animated.div>,
]

export default function Know() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 4), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}

render(<Know />, document.getElementById('root'))
