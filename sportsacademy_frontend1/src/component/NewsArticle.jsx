import React from 'react';
import { Button, Card, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export function NewsArticle(props) {
    return (
        <Col lg={6}>
            <Card>
                <Card.Img variant="top" src={props.article.urlToImage} />
                <Card.Body>
                    <Card.Title>{props.article.title}</Card.Title>
                    <Card.Text>
                        {props.article.description}
                    </Card.Text>
                    <Button variant="primary">Read full article</Button>
                </Card.Body>
            </Card>
        </Col>        

    );
}