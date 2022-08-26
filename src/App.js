import Cards from "./components/Cards/Cards";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <Menu />
      <Header
        heading="Free QR Code Generator"
        description="With our QR code generator, users can create a QR code in minutes and use it."
        btnText="Get Started"
        btnUrl="#"
        cImage="images/qrcode.svg"
      />
      <Cards />
      <Intro />
      <Form />
      <Header
        heading="Made to fit your needs - whatever they are
"
        description="QR Codes have unlimited uses - see how we can help you in any aspect of your business."
        btnText="Get Started"
        btnUrl="#"
        cImage="images/qr-code.png"
        iframeVideo="true"
      />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
