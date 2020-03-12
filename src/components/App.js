import React, { Component } from 'react';
import axios from 'axios';  
import MenuOne from './MenuOne';
import MenuTwo from './MenuTwo';
import ContainerOne from './ContainerOne';
import ContainerTow from './ContainerTow';
import Footer from './Footer';
import ContainerTow2 from './ContainerTow2';
import ContainerTow3 from './ContainerTow3';
import ContainerTow4 from './ContainerTow4';

const getProductData = () =>
                    axios.get('/getdata01')
                          .then( (res) => res.data )

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:null,
      hienThiForm:true,
      hienThiForm2:true
    }
  }
  
  componentWillMount() {
    if(this.state.data === null){
       getProductData().then((res) =>{
        this.setState({
          data:res
        });
       })  
    }
  }
 
  printData = () => {
    if(this.state.data != null){
      return this.state.data.map((value,key)=>
     (<ContainerTow
      key={key}
      product_name={value.product_name}
      product_price={value.product_price}
      image={value.image}
      />)
      )}
  }

  doiTrangThai = () => {
    this.setState({
        hienThiForm: !this.state.hienThiForm
    });
}
  doiTrangThai2 = () => {
    this.setState({
      hienThiForm2: !this.state.hienThiForm2
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });
  }
  render() {
     console.log(this.state.data);
     console.log('Du lieu Bo nhan duoc la:' + this.state.searchText);
    //  var ketqua=[];
    //  this.state.data.forEach( (item) =>{
    //    if(item.product_name.indexOf(this.state.searchText) != -1){
    //       ketqua.push(item) 
    //    }
    //  })


    //  var ketqua = [];
    //   this.state.data.forEach((item) => {
    //   console.log(this.state.data)
    //   if(item.product_name.indexOf(this.state.searchText) !== -1){
    //     ketqua.push(item);
    //   }
    // })
    // console.log(ketqua);
    return (
        <div className="app">
        <header className="header">
          <div className="grid wide">
            <MenuOne 
            hienThiForm={this.state.hienThiForm}
            ketNoi={() => this.doiTrangThai()}
            hienThiForm2={this.state.hienThiForm2}
            ketNoi2={() => this.doiTrangThai2()}
            />
            <MenuTwo
            checkConnectProps={(dl) => this.getTextSearch(dl)}
            /> 
          </div>
        </header>
        <div className="app__container">
          <div className="grid wide">
              <div className="row sm-gutter app__content">
                    <ContainerOne/>
                    <div className="col l-10 m-12 c-12">
                    <ContainerTow2/>
                    <ContainerTow3/>
                    <div className="home-product">
                      <div className="row sm-gutter">
                          {
                            this.printData()
                          }
                       </div>
                    </div>    
                    <ContainerTow4/>
                </div>
              </div>
            </div>
        </div>
      <Footer/>
      </div>
        );
   }
}

export default App;