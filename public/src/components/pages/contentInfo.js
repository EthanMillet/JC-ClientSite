import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { GET_DATAPOINT } from '../../utils/queries';
import { Link, useLocation } from 'react-router-dom';
import './styles/content.css'

function ContentInfo(user) {



    console.log(user)

    return (
        <div className='main'>
                       {/* 
                        {user.allUser.dataPoints.map((dataPoints) => (
                            <div key={binders._id} className='conceptBlock'>

                            </div>
                        ))} */} 
        </div>
    );
  }
  
  export default ContentInfo;