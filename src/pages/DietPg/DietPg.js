import React from 'react'
import './DietPg.css'
import MainLayout from '../../components/MainLayout/MainLayout'
const DietPg = () => {
  return (
    <MainLayout>
        <div className="diets__main">
            <h1>Our Diets</h1>
            <div className="diets__container">
                <div className="diets__card">
                    <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4"className='diet_card_img' alt=" " />
                    <p>Food Name</p>
                    <p>Calorie</p>
                    <button>View Details</button>
                </div>

                <div className="diets__card">
                    <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4"className='diet_card_img' alt=" " />
                    <p>Food Name</p>
                    <p>Calorie</p>
                    <button>View Details</button>
                </div>
                 <div className="diets__card">
                    <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4"className='diet_card_img' alt=" " />
                    <p>Food Name</p>
                    <p>Calorie</p>
                    <button>View Details</button>
                </div>
                <div className="diets__card">
                    <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4"className='diet_card_img' alt=" " />
                    <p>Food Name</p>
                    <p>Calorie</p>
                    <button>View Details</button>
                </div>

                <div className="diets__card">
                    <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" className='diet_card_img' alt=" " />
                    <p>Food Name</p>
                    <p>Calorie</p>
                    <button>View Details</button>
                </div>


            </div>
        </div>
    </MainLayout>
  )
}

export default DietPg