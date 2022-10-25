import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Page/Header';
import LeftSideNav from '../Page/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <h2>main page</h2>
            <Header></Header>
            <Container>
            <Row>
                <Col lg='5' className='bg-info'>
            <LeftSideNav></LeftSideNav>    
                </Col>
                <Col lg='7'>
                <Outlet></Outlet>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Main;