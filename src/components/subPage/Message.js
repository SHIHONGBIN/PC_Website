import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Textarea,
    message
} from 'antd';
import React from 'react'
import styles from './../../routes/IndexPage.css'
import BreadNav from './breadNav.js'
import {connect} from 'dva'
import PropTypes from 'prop-types'

const { Option } = Select;
const { TextArea } = Input;
const success = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
  };
class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        isComfrim:false,
        disabled:true
    };

    componentDidMount(){
        document.title = '在线留言'
    }

    handleReset = () => {
        this.props.form.resetFields();
    };

    handleSubmit = e => {
        // console.log(this.props)
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            
            if (err) {
                console.log('Received values of form: ', values);
            }else{
                this.setState({
                    disabled:!this.state.disabled
                })
                this.props.dispatch({type:'changenav/ajaxHandleMessage', payload:values, callback:(res)=>{message.success('提交成功!'); setTimeout(()=>window.location.reload(), 2500)}})
            }
        });
    };

    
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const {comfrimMessage} = this.props.changenav.indexData
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 20,
                    offset: 4,
                },
            },
        };
 
        
       
        return (
            <div className={styles.aboutBox}>
               
           
    
                <BreadNav props = {this.props} />
                <div className={styles.tinyBorder}></div>
                <div className={styles.nyAboutBox}>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item
                            label='标题'
                        >
                            {getFieldDecorator('Title', {
                                rules: [{ required: true, message: '请输入标题'},{whitespace: true, message:'标题不能为空'}],
                            })(<Input placeholder='请输入标题' />)}
                        </Form.Item>
                        <Form.Item
                            label='客户姓名'
                        >
                            {getFieldDecorator('Name', {
                                rules: [{ required: true, message: '请输入您的姓名'},{whitespace: true, message:'姓名电话不能为空'}]
                            })(<Input placeholder='请输入您的姓名' />)}
                        </Form.Item>
                        <Form.Item label="联系电话">
                            {getFieldDecorator('Phone', {
                                rules: [{ required: true, message: '请输入您的联系电话!'},{whitespace: true, message:'联系电话不能为空'},{pattern:/^1[345678]\d{9}$|^0[0-9]{2,3}-[0-9]{8}|^\s+$/,message:'格式不正确'}],
                            })(<Input placeholder='请输入您的联系电话' />)}
                        </Form.Item>

                        <Form.Item label="电子邮箱">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: '格式不正确!',
                                    },
                                    {
                                        required: false,
                                        message: '请输入您的电子邮箱!',
                                    },
                                ],
                            })(<Input placeholder='请输入您的电子邮箱' />)}
                        </Form.Item>
                        <Form.Item label="QQ号">
                            {getFieldDecorator('qq', {
                                rules: [{
                                    type: 'number',
                                    message: '格式不正确!',
                                }, { required: false, message: '请输入您的QQ号码!' }],
                            })(<Input placeholder='请输入您的QQ号码' />)}
                        </Form.Item>

                        <Form.Item
                            label='联系地址'
                        >
                            {getFieldDecorator('address', {
                                rules: [{ required: false, message: '请输入您的联系地址', whitespace: true }],
                            })(<Input placeholder='请输入您的联系地址' />)}
                        </Form.Item>

                        <Form.Item
                            label='内容'
                        >
                            {getFieldDecorator('message', {
                                rules: [{ required: false, message: '请输入您的内容', whitespace: true }],
                            })(<TextArea placeholder='请输入您的内容' />)}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" disabled={!this.state.disabled}>
                                提交
            </Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset} disabled={!this.state.disabled}>
                                重置
            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);


WrappedRegistrationForm.propTypes = {
    changenav:PropTypes.object
  };
  
  const mapStateToProps = (state) => {
    return {
        changenav:state.changenav
    }
  }


export default connect(mapStateToProps)(WrappedRegistrationForm)