import React from "react";
import { useNavigate  } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './index.css';

export default function Nav({theme, currentPage}) {
    const navigate = useNavigate();

    const changePage = (e, link) => {
        e.preventDefault();
        navigate(link);
    };

    return (
        <Navbar collapseOnSelect expand="xs" variant={theme ? "light" : "dark"} style={{flexWrap: "nowrap"}}>
            <Navbar.Brand className="op0"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className={theme ? "dropdown" : "dropdown-dark"} style={{marginLeft: "20px"}}>
            <Container className={theme ? "dropdown-border" : "dropdown-border-dark"} style={{fontFamily:'Roboto Slab'}}>
                    <Row>
                        <Col>
                            <button onClick={(e) => changePage(e, "/")} style={{backgroundColor: 'transparent', border:'0px', color:'#343a40'}}>
                                {currentPage === "home" && <FiberManualRecordIcon className={theme ? "nav-icon" : "nav-icon-dark"} style={{color: "white", position: "relative", bottom:"10px"}} />}
                                <h1 className={currentPage === "home"? "white-icon" : "dark-icon"} style={{ display: "inline"}}>Home</h1>
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button onClick={(e) => changePage(e, "/project")} style={{backgroundColor: 'transparent', border:'0px', color:'#343a40'}}>
                                {currentPage === "project" && <FiberManualRecordIcon className={theme ? "nav-icon" : "nav-icon-dark"} style={{color: "white", position: "relative", bottom:"10px", fontSize: "15px"}}/>}
                                <h1 className={currentPage === "project"? "white-icon" : "dark-icon"} style={{ display: "inline"}}>Projects</h1>
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button onClick={(e) => changePage(e, "/skills")} style={{backgroundColor: 'transparent', border:'0px', color:'#343a40'}}>
                                {currentPage === "skills" && <FiberManualRecordIcon className={theme ? "nav-icon" : "nav-icon-dark"} style={{color: "white", position: "relative", bottom:"10px"}}/>}
                                <h1 className={currentPage === "skills"? "white-icon" : "dark-icon"} style={{ display: "inline"}}>Skills</h1>
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button onClick={(e) => changePage(e, "/about")} style={{backgroundColor: 'transparent', border:'0px', color:'#343a40'}}>
                                {currentPage === "about" && <FiberManualRecordIcon className={theme ? "nav-icon" : "nav-icon-dark"} style={{color: "white", position: "relative", bottom:"10px"}}/>}
                                <h1 className={currentPage === "about"? "white-icon" : "dark-icon"} style={{ display: "inline" }}>About</h1>
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button onClick={(e) => changePage(e, "/blogs")} style={{backgroundColor: 'transparent', border:'0px', color:'#343a40'}}>
                                {currentPage === "blogs" && <FiberManualRecordIcon className={theme ? "nav-icon" : "nav-icon-dark"} style={{color: "white", position: "relative", bottom:"10px"}}/>}
                                <h1 className={currentPage === "blogs"? "white-icon" : "dark-icon"} style={{ display: "inline" }}>Blog</h1>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
}