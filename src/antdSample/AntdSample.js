import { Button, Col, Row } from 'antd'
import React from 'react'

function AntdSample() {


    return (<>
        <Button danger type='primary'>Hello Ant Design</Button>

        <Row>
            <Col span={6}>
                Hello-1
            </Col>
            <Col span={18}>
                Hello-2
            </Col>
        </Row>
    </>)
}

export default AntdSample

