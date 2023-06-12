import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import Button from '../button/Button';
import iconPlus from '../../assets/images/plus.png'


function Maincategories(props) {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("https://api.dassyor.uz/client/category/3")
        .then(res => res.json())
        .then(data => {
          data.status ? setData(data.data) : setData([])
          })

  },[])
  console.log(data);
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <div className="containerbox">
        <div className="containerbox__title">
          <div>
            <h1 className='containerbox__title__name'>Main categories</h1>
          </div>
          <div>
            <Button icon={iconPlus}  text={"New main category"} 
        appereans={"regular"}
        className={"button_primary containerbox__title__button"}/>
          </div>
        </div>
      <Accordion open={open} toggle={toggle} className='maincategoribox'>
        <AccordionItem >
          <AccordionHeader className='maincategoribox__top' targetId="1" style={{justifyContent:"space-between", display:"inline-flex", width:"100%", background:"red"}}>Main category 0 <div className='maincategoribox__top__btn'>
            <Button icon={iconPlus}  text={"New main category"} 
                appereans={"regular"}
                className={"button_tertiary containerbox__title__button"}/>
            
            <Button icon={iconPlus}  text={"New main category"} 
                appereans={"negative"}
                className={"button_tertiary containerbox__title__button"}/>

            </div></AccordionHeader>
          <AccordionBody accordionId="1">
           <div className='categorybox'>
           <div key={data.category_id} className="category">
          <h2 className="category__name">{data.category_name}</h2>
          <div className="category__box">
            {data && data[0]?.categories.map((item) => (
                <>
                {console.log(item)}
                <Link key={item.category_id} to={ `product/${item.category_id}/${item.category_id}`}>
                    <div style={{backgroundImage: `url(https://dassyor.uz${item.category_image})`, width: 400, height: 200}}
                      className={`category__big-and-small ${item.category_size == "big" ? "category__big" : "category__small"}`}>
                      <h5 className="category__name-two">{item.category_name}</h5>
                      
                    </div>
                    <Button icon={iconPlus}  text={"New main category"} 
                appereans={"regular"}
                className={"button_tertiary containerbox__title__button"}/>
            
            <Button icon={iconPlus}  text={"New main category"} 
                appereans={"negative"}
                className={"button_tertiary containerbox__title__button"}/>
                </Link>
                
                </>
              ))}
          </div>
      </div>
           </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
          <div className='categorybox'>
           <div key={data.category_id} className="category">
          <h2 className="category__name">{data.category_name}</h2>
          <div className="category__box">
            {data && data[0]?.categories.map((item) => (
                <>
                {console.log(item)}
                <Link key={item.category_id} to={ `product/${item.category_id}/${item.category_id}`}>
                    <div style={{backgroundImage: `url(https://dassyor.uz${item.category_image})`, width: 400, height: 200}}
                      className={`category__big-and-small ${item.category_size == "big" ? "category__big" : "category__small"}`}>
                      <h5 className="category__name-two">{item.category_name}</h5>
                    </div>
                </Link>
                </>
              ))}
          </div>
      </div>
           </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
          <div className='categorybox'>
           <div key={data.category_id} className="category">
          <h2 className="category__name">{data.category_name}</h2>
          <div className="category__box">
            {data && data[0]?.categories.map((item) => (
                <>
                {console.log(item)}
                <Link key={item.category_id} to={ `product/${item.category_id}/${item.category_id}`}>
                    <div style={{backgroundImage: `url(https://dassyor.uz${item.category_image})`, width: 400, height: 200}}
                      className={`category__big-and-small ${item.category_size == "big" ? "category__big" : "category__small"}`}>
                      <h5 className="category__name-two">{item.category_name}</h5>
                    </div>
                </Link>
                </>
              ))}
          </div>
      </div>
           </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      </div>
      
    </div>
  );
}

export default Maincategories;