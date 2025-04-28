import React from "react";
import UserIcon from "../assets/Home.svg";
import JoseIcon from "../assets/Jose.png";
import { MdOutlineCalendarToday } from "react-icons/md";
import PatientIcon from "../assets/Group.svg";
import MessagesIcon from "../assets/Chat.svg";
import CardIcon from "../assets/Card.svg";
import "./Topbar.css";
import LogoIcon from "../assets/Logo.svg";

const Topbar = () => {
    return (
        <nav className="topbar" aria-label="Main Navigation">
            <div className="topbar-left">
                <div className="top-logo-container">
                    <img src={LogoIcon} alt="Logo" className="top-logo" />
                </div>
                <ul className="topbar-nav-links">
                    <li><img src={UserIcon} alt="User" className="topbar-UserIcon" /> Overview</li>
                    <li className="active"><img src={PatientIcon} alt="User" className="topbar-PatientIcon" /> Patients</li>
                    <li><MdOutlineCalendarToday className="topbar-ScheuldeIcon" aria-hidden="true" /> Scheulde</li>
                    <li><img src={MessagesIcon} alt="User" className="topbar-MessagesIcon" /> Messages</li>
                    <li><img src={CardIcon} alt="User" className="CardIcon" /> Transactions</li>

                </ul>
            </div>


            <div className="topbar-right">
                <div className="topbarrightprofile">
                    <img
                        src={JoseIcon}
                        alt="Dr. Jose Simmons"
                        className="topbarprofile-pic"
                    />
                    <div className="topbarprofile-info">
                        <span className="topbarprofile-name">Dr. Jose Simmons</span>
                        <small className="topbarprofile-role">General Practitioner</small>
                    </div>
                    <button className="topbarsettings-btn" aria-label="Settings"></button>
                    <button className="topbarmore-btn" aria-label="More Options"></button>
                </div>
            </div>
        </nav>
    );
};

export default Topbar;