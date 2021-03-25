import React, { useState } from 'react'
import './header.css'
import iconLabel from '../../assets/iconLabel.png'
import contactIcon from '../../assets/contactIcon.png'
import { useDispatch } from 'react-redux'
import { apiAddCard } from '../../redux/myReducer'

const Header = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    const dispatch = useDispatch()

    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onCommentChange = (e) => {
        setComment(e.target.value)
    }

    const onSave = () => {
        if(!name)
            {alert('Поле имя не может быть пустым')}
        else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
            {alert('Не верно указан e-mail адрес')}
        else if(!comment)
            {alert('Поле комментарий не может быть пустым')}
        else {
            dispatch(apiAddCard(name, email, comment))
        }
    }


    return (
        <div className="headerBox">
            <img src={iconLabel} className="col-8 icon-lable-header" alt="iconLabel"></img>
            <img src={contactIcon} className="col-8 contact-lable" alt="contactIcon"></img>
            <div className="container">
                <div className="row row-cols-auto centered">
                    <div className="col-md-6 col-12 centered box1">
                        <div className="form-box1">
                            <label className="label">Имя <label style={{color:"red"}}>*</label></label>
                            <input
                                type="text"
                                placeholder={name}
                                onChange={onNameChange}
                                className="input-text"
                            ></input>
                        <label className="label">E-Mail <label style={{color:"red"}}>*</label></label>
                        <input
                            type="text"
                            placeholder={email}
                            onChange={onEmailChange}
                            className="input-text"
                        ></input>
                    </div>
                </div>
                <div className="col-md-6 col-12 centered">
                    <div className="form-box2">
                        <label className="label">Комментарий <label style={{color:"red"}}>*</label></label>
                        <textarea
                            type="text"
                            placeholder={comment}
                            onChange={onCommentChange}
                            className="input-text comment-input"
                        ></textarea>
                        <button
                            className="write-buttom"
                            onClick={onSave}
                        >Записать</button>
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}
export default Header