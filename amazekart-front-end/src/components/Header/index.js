import React,{useEffect,useState} from 'react'
import './style.css'
import {useSelector, useDispatch} from 'react-redux'
import { getAllCategory } from '../../actions';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import {
  DropdownMenu,
} from "../MaterialUi";
import Signin from '../signin/signin';
import { login, signout, signup as _signup } from "../../actions";


export default function Header(props) {

  const category = useSelector(state => state.category);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
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

    const userSignup = () => {
      const user = { firstName, lastName, email, password };
      if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        password === ""
      ) {
        return;
      }
  
      dispatch(_signup(user));
    };
  
    const userLogin = () => {
      if (signup) {
        userSignup();
      } else {
        dispatch(login({ email, password }));
      }
    };
  
    const logout = () => {
      dispatch(signout());
    };

    const renderLoggedInMenu = () => {
      return (
        <DropdownMenu
          menu={<a className="fullName">Riya</a>}
          menus={[
            { label: "My Profile", href: "", icon: null },
            { label: "SuperCoin Zone", href: "", icon: null },
            { label: "Flipkart Plus Zone", href: "", icon: null },
            {
              label: "Orders",
              href: `/account/orders`,
              icon: null,
            },
            { label: "Wishlist", href: "", icon: null },
            { label: "My Chats", href: "", icon: null },
            { label: "Coupons", href: "", icon: null },
            { label: "Rewards", href: "", icon: null },
            { label: "Notifications", href: "", icon: null },
            { label: "Gift Cards", href: "", icon: null },
            { label: "Logout", href: "", icon: null },
          ]}
        />
      );
    };
  
    const renderNonLoggedInMenu = () => {
      return (
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
              <a href='/signin'>
              <button className="loginButton"> Signin</button>
              </a>
            </div>
            <div className="firstmenu">
              
              <span style={{color:"#000"}}>New Customer?</span>
              <a href="/signup" style={{ color: '#2874f0', marginLeft:'2%' }}>Sign Up</a>
            </div>
            </>
          }
        />
      );
    };


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
            {/* {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()} */}
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
                <a href='/signin'>
                <button className="loginButton"> Signin</button>
                </a>
              </div>
              <div className="firstmenu">
                
                <span style={{color:"#000"}}>New Customer?</span>
                <a href="/signup" style={{ color: '#2874f0', marginLeft:'2%' }}>Sign Up</a>
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

