import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';
import { Link, useLocation } from 'react-router-dom';
import './styles/content.css'
import ContentInfo from './contentInfo'

function Content() {

    const location = useLocation()
    const { loading, error, data } = useQuery(GET_USER, {
        variables:{ _id: "66087d796c2dafd0cc133906"}
    });
    
    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`

    console.log(location)
    const { from } = location.state

    console.log(from)
    console.log(data)
    // const { loading, error, data } = useQuery(GET_USER);
    // if (loading) return "Loading..."
    // if (error) return `Error! ${error.message}`


    const styleTheme1 = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    }

    const styleTheme2 = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    }

    const styleTheme3 = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    }

    const styleTheme4 = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    }

    const styleTheme5 = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    }

    const styleTheme6 = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    }

    const styleTheme7 = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    }

    return (
        <div className='main'>
            <div className='hero'>

            </div>

            <div className='Content-Introduction'>
            <div className="Content-intro-container">
                    <div className="Content-intro-sub">
                <p className="Content-intro-paragraph">Jesus is the Christ the Son of the Eternal Father, the Savior of the world, the Redeemer of mankind. We may know of him, but do we really know him. The Book of Mormon witnesses that Jesus is the Son of God the promised Messiah the Christ, and that He is the only source of remission of sins.; It testifies that we must believe in HIm and be reconciled to God, and that we must repent, come unto Him, and become His sons and His daughters, or we cannot be saved. Eventually, all of us must stand before the judgement bar of Christ and be judged of our works  by him. Because of these things, it is vitally important that we come to know Him, to know who he really is and what he has done, and most importantly, how to come unto Him.</p>
                <p className='Content-intro-paragraph'>The Book of Mormon teaches us about these and other critical aspects of the Savior. It teaches the things we must do in our everyday lives. Below, find a beginning list of scripture references and associated brief concepts found in the Book of Mormon. These brief quotations are an invitation to the reader to study the assoctiated scriptural reference in the sacred thext. To truly understand, find the reference yourself, read the entire verse sequence and feel the Spirit of the Lord testify of the Savior, His mission and our needed relationship to Him. As you read let the Holy Spirit into your heart that you may gain your own witness of the Savior.</p>
                    </div>
                </div>
            </div>

            <div className='content'>
                <div className='content-header'>
                    <h2 className='content-header-title'>Celebrating Christ by coming to know Him - Scripture Reference List</h2>
                </div>

                <div className='content-main'>
                   <div className='content-titles'>
                        <h2>Concept</h2>
                        <h2>Book Ch/Vs</h2>
                        <h2>Quote</h2>
                    </div>
                    <div>
                        <ContentInfo user={data}></ContentInfo>

                    </div> 

                </div>


            </div>

            <div className='Content-Introduction'>
            <div className="Content-intro-container">
                    <div className="Content-intro-sub">
                <p className="Content-intro-paragraph">From the foundation of this world, Jesus Christ has played a pivotal role in the Creation, the Fall, the Atonement and Redemption of man. Without the creation and te fall, we would not exist. Without the atonement and the resurrection of Jesus Christ we would be forever lost, both physically and spiritually. However, because of Jesus Christ we are not lost but are free to choose. He is truly the foundation of our faith, the basis of our hope and the means of our salvation.</p>
                <p className='Content-intro-paragraph'>The scriptures testify of Christ. We come to know Him by feasting on his words, diligently learning following His commandments, praying sincerely, accepting covenants, and applying His doctrine to our lives every day.</p>
                <p className='Content-intro-paragraph'>I witness to you that Jesus Christ is our personal Savior and Redeemer. There is no other way nor means under heaven wherby we can be saved. WE must individually come unto Christ, take upon us His name, and become a new creature in Him.</p>
                <p className='Content-intro-paragraph'>This site is dedication to celebrating Christ. "And we talk of Christ, we rejoice in Christ, we preach of Christ, we prophesy of Christ, and we write... that our childeren may know to what source they may look for a remission of sins." II Nephi 25:26</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Content;