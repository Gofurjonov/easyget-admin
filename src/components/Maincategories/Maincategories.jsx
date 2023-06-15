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
import iconPlus from '../../assets/images/plus.png';
import Errormodal from '../Errormodal/Errormodal';
import Editmodal from '../Editmodal/Editmodal';
import NewsubModal from '../NewsubModal/NewsubModal'


function Maincategories(props) {
  const [data, setData] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function toggleDeleteModal() {
    setShowDeleteModal(!showDeleteModal);
  }
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
       
        
        {data && data.map(row => (
          <AccordionItem>
          <AccordionHeader  targetId={row.category_id} className='category__name'>
            <div className="boxcha">

            {row.category_name}
          <div className='containerbox__main__btn'>
          <Button icon={iconPlus}  text={"Edit category"} 
          appereans={"regular"}
          className={"button_tertiary containerbox__main__button"} onClick={handleEditClick}/>
          <Editmodal isOpen={isModalOpen} onClose={()=>setIsModalOpen(!isModalOpen)}/>
            <Button icon={iconPlus}  text={"Delete category"} 
          appereans={"negative"}
          className={"button_tertiary containerbox__main__button"} onClick={toggleDeleteModal}/>
          <Errormodal show={showDeleteModal} onClose={toggleDeleteModal} />
          </div>
          </div>
       
          </AccordionHeader>
        
          <AccordionBody accordionId={row.category_id}>
          <div className='categorybox'>
           <div key={data.category_id} className="category">
          <h2 className="category__name">{row.category_name}</h2>
          <div className="category__box">
            {row && row?.categories.map((item) => (
                <>
             
                {/* <Link key={item.category_id} to={ `product/${item.category_id}/${item.category_id}`}> */}
                    <div style={{backgroundImage: `url(https://dassyor.uz${item.category_image})`, width: 400, height: 200}}
                      className={`category__big-and-small ${item.category_size == "big" ? "category__big" : "category__small"}`}>
                      <h5 className="category__name-two">{item.category_name}</h5>
                    </div>
                    
                {/* </Link> */}
                </>
              ))}
          </div>
      </div>
      <div className='newSubcategory' onClick={() => setShowModal(true)}>
        <div className='newSubcategory__box'>
          <div className='newSubcategory__box__plus'>+</div>
          <div className='newSubcategory__box__title'>New subcategory</div>
        </div>
      </div>
      {showModal && <NewsubModal/>}
           </div>
          </AccordionBody>
        </AccordionItem>
        ))}
     
      </Accordion>
      </div>
      
    </div>
  );
}

export default Maincategories;