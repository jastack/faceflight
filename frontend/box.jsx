import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
};

class Box extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="box">
        <form>
          <img src="http://res.cloudinary.com/dopv3qpj7/image/upload/v1496209211/plane_u4vmfh.svg"></img>
          <hr />
          <input type="textarea" placeholder="Username" />
          <input type="textarea" placeholder="Password" />
          <hr />
          <FacebookLogin
            appId="1509388585748949"
            autoLoad={false}
            size="small"
            fields="name,email,picture"
            callback={responseFacebook} />
        </form>
      </div>
    );
  }
}

export default Box;
