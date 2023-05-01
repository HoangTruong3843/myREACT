import React from 'react'
import './Header.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // ==> nay la cai icon người

import IconButton from '@mui/material/IconButton';  // này là chọn phương thức bấm (vì xài cách "nhấn để chọn" trêm icon --> nên dùng cái này)

import ForumIcon from '@mui/icons-material/Forum';  // ==> này là cái icon khung chat bên phải

// tiêu đề: anh nghĩ ý là dòng đầu tiên của trang web mình 
// trước tiên: quy định cái phương thức dùng icon : --> click on button --> nên xài IconButton
// cái nào khai báo trước là cái icon đầu tiên (AccountCircleIcon) --> đến cái img (cái react icon) --> xong cái ForumIcon 
const Header = () => {
    return (
        <div className="header">
            
            <IconButton>          
                <AccountCircleIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src="logo192.png" alt="header" />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}
export default Header