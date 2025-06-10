import Spline from '@splinetool/react-spline'
import React from 'react'


const Page6 = () => {
  return (
    <div className="section">
      <div className="padding-global final-cta">
        <div className="container-default final-cta">
          <h2 className="statement" data-split-text>Let’s Work Together</h2>
          <p className="paragraph center">Transforming your digital presence with innovative web design, intuitive app design, and impactful.</p>
          <a href="#" className="button w-inline-block">
            <div className="text-block-2">Contact Us</div>
            <img src="images/arrow-dark.svg" alt="" />
          </a>
        </div>
        <div className="spline-absolute">
            <div className="spline-scene">

          <Spline className="spline-scene" data-w-id="78f36260-0766-52e8-f25a-8fb9798a6483" data-animation-type="spline" scene="https://prod.spline.design/q7Zli-P11r5mAIez/scene.splinecode">
            <canvas />
          </Spline>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Page6
