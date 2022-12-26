import { Button, Form, Input, Switch } from 'antd'
import React from 'react'

function AddProductForm() {

    const submit = (values) => {
        console.log('VALUES ', values);
    }

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };

  return (<>


            <Switch  defaultChecked onChange={onChange}>

            </Switch>


        <Form
            onFinish={submit}
        >

        <Form.Item
            label='Name'
            name='name'
            rules={[{ required: true, message: 'Please input your name!' }]}
        >
            <Input/>
        </Form.Item>

        <Form.Item
            label='Stock'
            name='unitsInStock'
        >
            <Input/>
        </Form.Item>

        <Form.Item
            label='Price'
            name='unitPrice'
            rules={[{ required: true, message: 'Please input your unit price!' }]}
        >
            <Input/>
        </Form.Item>

        <Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>

        </Form>

  </>
  )
}

export default AddProductForm