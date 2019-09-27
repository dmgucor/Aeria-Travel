import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles/Home.css'
import Batllo from './img/casa-batllo.jpg';
import EmpireState from './img/new-york.jpg';
import Kyoto from './img/kyoto.jpg';

export class Home extends React.Component {
    greeting = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis maximus mauris sed vulputate. Etiam venenatis feugiat ligula at convallis. Donec condimentum, diam eu posuere.';
    success = 'Over 45 cities';

    places = [{ 'src': Batllo, 'alt': 'Casa Batllo' },
    { 'src': EmpireState, 'alt': 'Empire State' },
    { 'src': Kyoto, 'alt': 'Kyoto' }
    ];

    showPlaces() {
        this.places.map((place) => {
            console.log(`src=${place.src} alt=${place.alt}`);
            return <img className='city-img' src={place.src} alt={place.alt}></img>
        });
    };


    render() {
        return (
            <div>
                <Container className='intro-container'>
                    <Row>
                        <Col lg={6} className='main-greeting'>
                            <p className='upper-row'>WEL</p>
                            <p className='bottom-row'>COME</p>
                        </Col>
                        <Col >
                            <Container className='desc-panel'>
                                <p>{this.greeting}</p>
                                <div className='bt-container'>
                                    <Button className='bt-more'>Know more</Button>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <div className='info-panel'>
                    <Row>
                        <Col>
                            <div>
                                {this.showPlaces()}
                            </div>
                        </Col>
                        <Col>
                            <p>{this.success}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}