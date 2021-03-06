import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <div className="container">
          <header className="header">vegetables</header>
          <div className="button">
            <div className="facebook">
              <img src="img/btn_facebook.png" alt="facebook" />
            </div>
            <div className="instagram">
              <img src="img/btn_instagram.png" alt="instagram" />
            </div>
            <div className="line_login"></div>
            <div className="box_login box">
              <div className="login">LOGIN</div>
            </div>
            <div className="box_join box">
              <div className="join">JOIN</div>
            </div>
          </div>
        </div>
        <div className="main_area">
          <div className="nav">
            <ul className="list_nav">
              <li className="button H">Home</li>
              <li className="button AU" >About Us</li>
              <li className="button V">Vegetables</li>
              <li className="button O">Online</li>
              <li className="button C">Contact</li>
            </ul>
          </div>
          <img src="img/img_main_pumpkin.png" alt="pumpkin" className="main_pic" />
        </div>

        <div>
          <div className="box1">
            <div className="box1_title">Vegetables</div>
          </div>

          <div className="box2">
            <div className="box2_title">Contacts</div>
          </div>

          <div className="box1_pic">
            <img src="img/img_vegetables_pepper.png" alt="pepper" className="pepper" />
            <img src="img/img_vegetables_carrot.png" alt="carrot" className="carrot" />
            <img src="img/img_vegetables_corn.png" alt="corn" className="corn" />
          </div>

          <div className="box2_content">
            <p className="box2_info1">or any questions or suggestions about Vegetables, Vegetables Club or your online order you can contact Vegetables Customer Service by phone, email or post and we’ll be happy to help.</p>
            <div className="box2_line"></div>
            <div className="box2_info2">E-mail : Vegetables@aaabbccc.com PHONE :+886-123-456-78 </div>

          </div>
        </div>
      </div>


      <footer className="box_footer">
        <div className="footer_p">
          Copyrights 2017 Vegetables cise / Design by Vegetables
            </div>
      </footer>
    </div >
  );
}

export default App;
