import './page/page.css';
import Page1 from './page/page1';
import Page2 from './page/page2';
import Form from './page/form';
import Footer from './page/footer';
import About from './page/naves/about';


function NS() {
  return (
    <div >
    <Page1/>
    <Page2/>
    <Form />
    <Footer/>
    </div>
  );
}

export default NS;
