import React, { Component } from 'react';
import axios from 'axios';


const addProductAction = (product_name,product_price,image) => 
     (axios.post('/add',{product_name,product_price,image})
       .then((resp) => resp.data))

class Signup extends Component {
   constructor(props) {
     super(props);
     this.state={
       product_name:'',
       product_price:'',
       image:''
     }
   }
   isChange = (event) => {
     var name=event.target.name;
     var value =event.target.value;
     console.log(name);
     console.log(value);
          
       this.setState({
         [name]:value
       });      
   } 
   handleClick = () =>{
     console.log(JSON.stringify(this.state));
     var {product_name,product_price,image} = this.state;
     addProductAction(product_name,product_price,image).then((response) =>{
       console.log(response);       
     })
    }

    render() {
        return (
<form>
  <div className="modal">
  <div className="modal_overlay" />  
   <div className="modal_body">
    <div className="auth-form">
      <div className="auth_form-contarner">
        <div className="authe_form-header">
          <h3 className="authe_form-deading">Đăng ký</h3>
          <span className="authe_form-switch--btn">Đăng nhập</span>
        </div>
        <div className="auth_form-form">
          <div className="auth_form-group">
            <input name="product_name" onChange={(event) => this.isChange(event)} type="text" className="auth_form-input" placeholder="Nhập gmail của bạn" />
          </div>
          <div className="auth_form-group">
            <input name="product_price" onChange={(event) => this.isChange(event)} type="text" className="auth_form-input" placeholder="mật khẩu của bạn" />
          </div>
          <div className="auth_form-group">
            <input  name="image" onChange={(event) => this.isChange(event)} type="text" className="auth_form-input" placeholder="Nhập lại mật khẩu của bạn" />
          </div>
          <div className="auth_form-aside">
            <p className="auth_form-policy--text">
              Bằng việc đăng ký bạn đã đồng ý với ứng dụng về 
              <a href="/" className="auth_form-policy--link">Điều khoản dịch vụ</a>&amp;
              <a href="/" className="auth_form-policy--link">Chính sách bảo mật</a>
            </p>
          </div>
          <div className="auth_form-controls">
            <button className="btn btn--normal auth_form-controls-back">TRỞ LẠI</button> 
            <button type="reset" onClick={() =>this.handleClick() } className="btn btn--primary">ĐĂNG KÝ</button>                                  
          </div> 
        </div>
        <div className="auth_form-socials">
          <a href="/" className="auth_form-socials--facebook btn btn-size--s btn_with-icon">
            <i className="auth_form-socials-icon fab fa-facebook-square" />        
            <span className="auth_form-socials--title">
              Kết nối với Facebook</span>
          </a>
          <a href="/" className="auth_form-socials--google btn btn-size--s btn_with-icon">
            <i className="auth_form-socials-icon fab fa-google" />    
            <span className="auth_form-socials--title">
              kết nối với Google</span>                                
          </a>
        </div>                                    
      </div>            
    </div> 
    {/* end form */}
  </div>
</div>
</form>
        );
    }
}

export default Signup;