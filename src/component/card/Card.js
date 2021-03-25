import React, { useState } from 'react'
import './card.css'

function Card(props) {
console.log(props)

let mailCommentStyle = {background: '', color: ''}
let nameStyle ={background: ''}

    if (props.index%2==0)
    {
        mailCommentStyle = {background: 'rgba(233,238,243,1)', color: 'rgba(75,89,108,1)'}
        nameStyle ={background: 'rgba(75,89,108,1)'}
    }
    else   
    {
        mailCommentStyle = {background: 'rgba(233,238,243,1)', color: 'rgba(88,173,82,1)'}
        nameStyle ={background: 'rgba(88,173,82,1)'}
    }
   
    
    return (
        <div className="card-box" >
                <div                     
                    className="header centered"
                    style={nameStyle}                    
                ><label>{props.user_name}</label></div>
                <div 
                    className="mail centered"
                    style={mailCommentStyle}
                >{props.user_email}</div>
                <div 
                    className="comment"
                    style={mailCommentStyle}
                ><label>{props.user_comment}</label></div>
        </div>
    )
}
export default Card