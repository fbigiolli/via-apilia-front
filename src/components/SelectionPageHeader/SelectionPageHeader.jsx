import React from "react";
import { Row , Col } from "react-bootstrap";
import './SelectionPageHeader.css'

function SelectionPageHeader({ headerTitle, headerSubtitle }) {
    return (
        <Row>
            <Col md={12} className="mt-5 text-center">
                <div className='header-title'>{headerTitle}</div>
                <div className='header-subtitle'>{headerSubtitle}</div>
            </Col>
        </Row>
    );
};

export default SelectionPageHeader;