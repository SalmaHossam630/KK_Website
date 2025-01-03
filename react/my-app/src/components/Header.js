import React from 'react';
import './Header.css';
export default function Header(){
  return(
    <header id="header"> 
    <div className="delivery-banner">
      <p>WE deliver thru RABBIT</p>
      <p>WE deliver thru RABBIT</p>
      <p>WE deliver thru RABBIT</p>
      <p>WE deliver thru RABBIT</p>
      <p>WE deliver thru RABBIT</p>
      <p>WE deliver thru RABBIT</p>
      <p>WE deliver thru RABBIT</p>
      <p>WE deliver thru RABBIT</p>
      <p>WE deliver thru RABBIT</p>
      <p>WE deliver thru RABBIT</p>
    </div>

    <nav className="user">
      <ul>
        <li>
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="45px"
              viewBox="0 -960 960 960"
              width="45px"
              fill="#475242"
            >
              <path
                d="M221-120q-27 0-48-16.5T144-179L42-549q-5-19 6.5-35T80-600h190l176-262q5-8 14-13t19-5q10 0 19 5t14 13l176 262h192q20 0 31.5 16t6.5 35L816-179q-8 26-29 42.5T739-120H221Zm-1-80h520l88-320H132l88 320Zm260-80q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM367-600h225L479-768 367-600Zm113 240Z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="45px"
              viewBox="0 -960 960 960"
              width="45px"
              fill="#475242"
            >
              <path
                d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    <nav class>
      <ul className="side-bar">
        <li onclick="hideSidebar()">
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#445240"
            >
              <path
                d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"
              /></svg
          ></a>
        </li>
        <li><a href="#">HOME</a></li>
        <li><a href="#">KK STORY</a></li>
        <li>
          <a href="#" class="shop-list"
            >SHOP
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="27px"
              viewBox="0 -960 960 960"
              width="27px"
              fill="#475242"
            >
              <path
                d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"
              />
            </svg>
          </a>
          <ul>
            <li><a href="#">KOFFEE</a></li>
            <li><a href="#">KK MERCH</a></li>
          </ul>
        </li>
        <li><a href="#">LOCATIONS</a></li>
        <li><a href="#">MENU</a></li>
      </ul>
      <ul>
        <li class="menu-button" onclick="showSidebar()">
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="35px"
              viewBox="0 -960 960 960"
              width="35px"
              fill="#445240"
            >
              <path
                d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"
              /></svg
          ></a>
        </li>
        <li className="hideOnSmallScreen"><a href="#">HOME</a></li>
        <li className="hideOnSmallScreen"><a href="#">KK STORY</a></li>
        <li className="hideOnSmallScreen">
          <a href="#" class="shop-list"
            >SHOP
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="27px"
              viewBox="0 -960 960 960"
              width="27px"
              fill="#475242"
            >
              <path
                d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"
              /></svg
          ></a>
          <ul>
            <li><a href="#">KOFFEE</a></li>
            <li><a href="#">KK MERCH</a></li>
          </ul>
        </li>
        <li className="hideOnSmallScreen"><a href="#">LOCATIONS</a></li>
        <li className="hideOnSmallScreen"><a href="#">MENU</a></li>
      </ul>
    </nav>
  </header>

  )
};