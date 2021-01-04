import { Button, ButtonGroup, Col, Container, Row, ToggleButtonGroup } from 'react-bootstrap';
import './ToDoPage.css';

const ToDoPage = () => {


    return (
        <div className="p-todo">
            <Container>
                <Row xs={1} className="justify-center">
                    <Col className="center mt-5 mb-3">
                        <h1>Todos</h1>
                    </Col>
                    <Col className="center mb-4">
                        <input className="text-center" type="text" placeholder="What's next?" />
                    </Col>
                    <Col className="center">
                        <div className="list">
                            {/* {list} */}
                        </div>
                    </Col>
                    <Col className="center">
                        <div className="between">
                            <span>x items left</span>
                            <ToggleButtonGroup name="select-filter">
                                <Button className="m-1" variant="light">All</Button>
                                <Button className="m-1" variant="light">Active</Button>
                                <Button className="m-1" variant="light">Complited</Button>
                            </ToggleButtonGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ToDoPage;