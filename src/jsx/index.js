import React, { useContext } from 'react'
/// React router dom
import {Routes, Route, Outlet } from 'react-router-dom'
import {  useSelector } from "react-redux";
/// Css
import './index.css'
import './chart.css'
import './step.css'


import ClassDetail from './components/AppsMenu/Class/ClassDetail';
/// Layout
import Nav from './layouts/nav'
import Footer from './layouts/Footer'
import { ThemeContext } from "../context/ThemeContext";

/// Dashboard
import FoodMenu from "./components/Dashboard/FoodMenu";

//CMS
import Content from './components/Cms/Content';

import Blog from './components/Cms/Blog';
//CMS Linking Pages
import ContentAdd from './components/Cms/ContentAdd';

import AddBlog from './components/Cms/AddBlog';
import BlogCategory from './components/Cms/BlogCategory';

import Inbox from './components/AppsMenu/Email/Inbox/Inbox'

import Calendar from './components/AppsMenu/Calendar/Calendar'


import ProductDetail from './components/AppsMenu/Shop/ProductGrid/ProductDetail'

import ProductOrder from './components/AppsMenu/Shop/ProductOrder'



/// Pages

import LockScreen from './pages/LockScreen'
import Error400 from './pages/Error400'
import Error403 from './pages/Error403'
import Error404 from './pages/Error404'
import Error500 from './pages/Error500'
import Error503 from './pages/Error503'
import Todo from './pages/Todo';


//Scroll To Top
import ScrollToTop from './layouts/ScrollToTop';


import EditTrainer from './components/Gymove/FoodMenu/EditTrainer';

import AddClass from './components/AppsMenu/Calendar/AddClass';
import Membership from './components/AppsMenu/Shop/Membership';
const Markup = () => {
  // let path = window.location.pathname
  // path = path.split('/')
  // path = path[path.length - 1]
  // let pagePath = path.split('-').includes('page')
  

  const allroutes = [
    /// Dashboard

    { url: 'add-class', component: <AddClass/> },
    { url: "trainers", component: <FoodMenu /> },
    { url: "edittrainer/:editId", component: <EditTrainer /> },

    //Cms
    { url: 'content', component: <Content/> },
    { url: 'blog', component: <Blog/> },
    { url: 'add-content', component: <ContentAdd/> },
    { url: 'add-blog', component: <AddBlog/> },
    { url: 'blog-category/:blogId', component: <BlogCategory/> },

    { url: 'email-inbox', component: <Inbox/> },
    { url: 'app-calender', component: <Calendar/> },
    { url: 'classes', component: <ClassDetail /> },
    

    { url: 'ecom-product-detail', component: <ProductDetail/> },
    { url: 'ecom-product-order', component: <ProductOrder/> },
    { url: 'members', component: <Membership/> },
    
    { url: 'todo', component: <Todo/> },
  ]

  return (
       <>          
          <Routes>              
            <Route path='/page-lock-screen' element= {<LockScreen />} />
            <Route path='/page-error-400' element={<Error400/>} />            
            <Route path='/page-error-403' element={<Error403/>} />
            <Route path='/page-error-404' element={<Error404/>} />
            <Route path='/page-error-500' element={<Error500/>} />
            <Route path='/page-error-503' element={<Error503/>} />     
            <Route  element={<MainLayout />} > 
                {allroutes.map((data, i) => (
                  <Route
                    key={i}
                    exact
                    path={`${data.url}`}
                    element={data.component}
                  />
                  ))}
            </Route>                            
         </Routes> 
         <ScrollToTop />
       </>
  )
}

function MainLayout(){
  const {sidebariconHover} = useContext(ThemeContext);
  const sideMenu = useSelector(state => state.sideMenu);
  return (
    <>    
      <div id="main-wrapper" className={`show ${sidebariconHover ? "iconhover-toggle": ""} ${ sideMenu ? "menu-toggle"  : ""}`}>  
          <Nav />
          <div className="content-body" style={{ minHeight: window.screen.height - 60 }}>     
            <div className="container-fluid">
              <Outlet />   
            </div>
          </div>
        <Footer />
      </div>
     
    </>
  )
};


export default Markup