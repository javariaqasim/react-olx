import React from 'react';
import './subNav.css'
import { Link } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function SubHeader() {
    return (
        <nav className='sub_header'>
            <div className=''>
                <ul>
                    <li><strong>ALL CATEGORIES<KeyboardArrowDownIcon style={{ height:"15px"}}/></strong></li>
                    <li><a href='#'>Mobile Phones</a></li>
                    <li><a href='#'>Cars</a></li>
                    <li><a href='#'>Motorcycles</a></li>
                    <li><a href='#'>Houses</a></li>
                    <li><a href='#'>TV-Video-Audio</a></li>
                    <li><a href='#'>Tablets</a></li>
                    <li><a href='#'>Land & Plot</a></li>

                </ul>
               
            </div>


        </nav>
    )
}
export default SubHeader;




