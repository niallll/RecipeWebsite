import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyImage from './MyImage';
import MovieImageArr from './MovieImages';
import { Card, CardBody, CardTitle, Col, CardText, Badge, Container, Row, CardImg } from 'reactstrap';

const Recipies = () => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch(`recipe`)
            .then((results) => {
                console.log(results);
                return results.json();
            })
            .then(data => {
                console.log(data);
                setItems(data);
            })
            .catch(e => { console.log(e); })
    }, []);

    return (
        <main>
            <h2>Recipes</h2>
            <Container>
                <Row>
                    {
                        (items != null) ?
                            items.map((items) => (
                                <Col>
                                    <Link to={`/recipe/${items.id}`} style={{ textDecoration: 'none' }}>
                                        <Card style={{ width: '19rem' }} className='recipe-preview'>
                                            <CardImg src={`${MovieImageArr.find(o => o.id === items.imageId)?.image}`} />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    {items.title}
                                                </CardTitle>
                                                <CardText>
                                                    <h4>
                                                        <Badge color='primary'>{items.calories} Kcal</Badge>
                                                        <span> </span>
                                                        <Badge color='primary'>{items.time} mins</Badge>
                                                    </h4>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                </Col>
                            ))
                            :
                            <div>Loading...</div>
                    }
                </Row>
            </Container>
        </main>
    )
}
export default Recipies;