import React from "react";
import './styles/main.css'

function Main() {
    return (
        <div className="main">
            <div className="hero">
                <div className="hero-text-container">
                    <h2 className="hero-title">Find Your Own Joy In Christ</h2>
                    <p className="hero-sub">Understand Your Eternal Father, Savior and Redeemer</p>
                </div>
            </div>


            <div className="sections">
                <div className="who-is-jc">
                    <button className="section-button">Who Is Jesus Christ</button>
                </div>

                <div className="what-has-jc">
                    <button className="section-button"><span>What Has Jesus Christ Done</span></button>
                </div>

                <div className="what-is-jc">
                    <button className="section-button">What is The Doctrine of Jesus Christ</button>
                </div>
            </div>

            <div className="introduction">
                <h2 className="intro-title">Introduction</h2>
                <p className="intro-paragraph">“To have joy in Christ every day: to come to know him, to come to be grateful, to take his name, to become his, to acknowledge him, to honor him, to keep to hold up for public notice. [1 Nephi 13:37]”</p>
                <p className="intro-paragraph">Jesus is the Christ the Son of the Eternal Father, the Savior of the world, the Redeemer of mankind. We may know of him, but do we really know him. The Book of Mormon witnesses that Jesus is the Son of God the promised Messiah the Christ, and that He is the only source of remission of sins.; It testifies that we must believe in HIm and be reconciled to God, and that we must repent, come unto Him, and become His sons and His daughters, or we cannot be saved. Eventually, all of us must stand before the judgement bar of Christ and be judged of our works  by him. Because of these things, it is vitally important that we come to know Him, to know who he really is and what he has done, and most importantly, how to come unto Him.</p>

            </div>
        </div>
    );
  }
  
  export default Main;