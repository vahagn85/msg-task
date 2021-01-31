import React,{useState} from 'react';
import MessagesTab from '../components/MessagesTab'
import ColorsTab from '../components/ColorsTab'
import {Container,Row,Col,Nav,Navbar,Tab} from 'react-bootstrap'
const Messages = () => {
    const [keyTab, setKeyTab] = useState('first');
    return (
        <div>
            <Tab.Container id="tabs-example" defaultActiveKey="first" activeKey={keyTab}>
                <Navbar bg="primary"  sticky="top">
                    <Nav variant="pills"
                         defaultActiveKey="first"
                         activeKey={keyTab}
                         onSelect={(selectedKey) => setKeyTab(selectedKey)}>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Messages</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Colors</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
                <Container fluid="md" >
                    <Row className="justify-content-md-center my-3">
                        <Col sm={5}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <MessagesTab/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <ColorsTab/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                </Row>
                </Container>
            </Tab.Container>
        </div>
    );
};

export default Messages;