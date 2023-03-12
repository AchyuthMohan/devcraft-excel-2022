import React,{useEffect, useState} from 'react'
import './DietPg.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import { diets } from '../../data/diets'
import DietDetDialog from '../../components/DietDetDialog/DietDetDialog'
import Aos from 'aos'
const DietPg = () => {
    const[open,setOpen]=useState(false)
    const[description,setDescription]=useState('')
    const[dName,setDname]=useState('')
    const[image,setImage]=useState()
    const handleClose=()=>{
        setOpen(false)
    }
    useEffect(()=>{
        Aos.init({duration:700})
    },[])
  return (
    <MainLayout>
        <DietDetDialog open={open} handleClose={handleClose} description={description} dName={dName} image={image}/>
        <div className="diets__main">
            <h1 data-aso="zoom-in">Our Diets</h1>
            <div className="diets__container" data-aos="zoom-in">

                {diets.map((diet,index)=>{
                    return( <div className="diets__card">
                    <img src={diet.image}className='diet_card_img' alt=" " />
                    <p>{diet.name}</p>
                    <p>{diet.calories}</p>
                    <button onClick={()=>{
                        setOpen(true)
                        setDescription(diet.description)
                        setDname(diet.name)
                        setImage(diet.image)
                    }}>View Details</button>
                </div>)
                })}
               
            </div>
        </div>
    </MainLayout>
  )
}

export default DietPg