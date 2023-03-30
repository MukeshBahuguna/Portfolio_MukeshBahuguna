import React , {useEffect ,useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period =2000;
    const toRotate=["Web Developer", "Web Designer" , "UI/UX Designer"]

    useEffect(()=>{
        let ticker = setInterval(() => {
            tick();
        }, delta);
    
    return ()=> clearInterval(ticker);
    },[text]);

    const tick= ()=>{
        let i=loopNum % toRotate.length; //for circular array
        let fullText = toRotate[i];
        let updatedText= isDeleting ? fullText.substring(0 , text.length-1 ) : fullText.substring(0 , text.length+1 );
    
        setText(updatedText);
        if(isDeleting){
            setDelta(300 - Math.random() * 100);

        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(500);
            setLoopNum(loopNum+1);
        }
    }

  return (
    
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'> Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Mukesh Bahuguna `}<span className="wrap">{text} </span></h1>
                    <p>
                    lorem ipsum lorem ipahjskdgkgggggk kkkkkkkkkkkkkkk kkkkkk kkkkk kkkkk
                     kkkkkkkk kkkkkkk kkkkk kkkkkkk kkkkkd  d  d  djhsdgajhsd d d s asd
                    </p>
                    <button onClick={()=>console.log('connect')}> Let's Connect <ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='Header img'/>
                </Col>
            </Row>
        </Container>
        
    </section>
  )
}

export default Banner