import React from 'react'
import './Showcase.css'
function Showcase() {
    return (
        <div>
           <div className="showcase-top">
                <div>
                    <h1>Pricing</h1>
                    <p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
                </div>
           </div>
           <div className="showcase-content">
              <div className="card">
                    <div className="free">
                        <h1>Free</h1>
                        <div className="inner-content">
                            <h2>$0/<span>mo</span></h2>
                            <p>10 users included</p>
                            <p>2 GB of storage</p>
                            <p>Email support</p>
                            <p>Help center access</p>
                            <button class="btn third">Sign Up for Free</button>
                        </div>
                    </div>
              </div>
              <div className="card">
                    <div className="pro">
                        <h1>Pro</h1>
                        <div className="inner-content">
                            <h2>$15/<span>mo</span></h2>
                            <p>20 users included</p>
                            <p>10 GB of storage</p>
                            <p>Priority email support</p>
                            <p>Help center access</p>
                            <button class="btn third">Get Started</button>
                        </div>
                    </div>
              </div>
              <div className="card">
                    <div className="enterprise">
                        <h1 className="enterprise-head">Enterprise</h1>
                        <div className="inner-content">
                            <h2>$29/<span>mo</span></h2>
                            <p>30 users included</p>
                            <p>15 GB of storage</p>
                            <p>Phone and email support</p>
                            <p>Help center access</p>
                            <button class="btn third">Contact Us</button>
                        </div>
                    </div>
              </div>
           </div>
        </div>
    )
}

export default Showcase
