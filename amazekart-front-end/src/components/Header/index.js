import React,{useEffect,useState} from 'react'
import './style.css'
import {useSelector, useDispatch} from 'react-redux'
import { getAllCategory } from '../../actions';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  DropdownMenu,
} from "../MaterialUi";
export default function Header(props) {

  const category = useSelector(state => state.category);
     const dispatch = useDispatch()


     useEffect(() => {
         dispatch(getAllCategory());
     },[])


    const renderCategories = (categories) => {
        let myCategories = [];
        for(let category of categories) {
            myCategories.push(
                <>
                    {
                        category.parentId ? <a href={category.slug}> {category.name} </a> : 
                        <option>{category.name}</option>
                    } 
                </>
            )
        }
        return myCategories;
    }
    return (
    <div className="header">
      
        <img
          className="header__logo"
          src="./images/Amazon Logo (1).png"
        />
        <div className='logo_name' style={{color:'#fff',padding:'2% 2% 2% 0',fontSize:'1.5rem',fontWeight:'bold'}}> AmazeKart </div>

      <div className="header__search">
        <select className="header_categories" name="categories">
          <option>All</option>
           {category.categories.length > 0 ? renderCategories(category.categories): null }
        </select>
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            
            <DropdownMenu
            menu={
              <span className="header__optionLineTwo">
                Account & Lists
            </span>
            }
            menus={[
              { label: 'Your Account', href: '', icon: null },
              { label: 'Your Orders', href: '', icon: null },
              { label: 'Your Wishlist', href: '', icon: null },
              { label: 'Your Rewards', href: '', icon: null },
              { label: 'Your Prime MemberShip', href: '', icon: null },
              { label: 'Your Seller Account', href: '', icon: null },
            ]}
            firstMenu={
              <>
              <div style={{display:'flex',justifyContent:'center' }}>
                <button className="loginButton" > Signin</button>
              </div>
              <div className="firstmenu">
                
                <span style={{color:"#000"}}>New Customer?</span>
                <a style={{ color: '#2874f0', marginLeft:'2%' }}>Sign Up</a>
              </div>
              </>
            }/>
          </div>
        

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
        
      </div>
    </div>
  );
}

