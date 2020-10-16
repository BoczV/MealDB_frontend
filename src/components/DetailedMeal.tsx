import Axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import '../style/DetailedMeal.scss';
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";


const Warning = styled.h1`
  position: absolute;
  top: 35%;
  left: 37%;
  color: red;
`;

function DetailedMeal() {
    const {mealId} = useParams()
    const [meal, setMeal] = useState<DetailedMeal>()
    const [ingList, setIngList] = useState<string[]>([])
    const [measureList, setMeasureList] = useState<string[]>([])
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    


    useEffect(() => {
        const url = `http://localhost:8762/mealservice/meal/${mealId}`
        Axios.get(url).then((data) => {
            setMeal(data.data.meals[0])
            setIngredientsList(data.data.meals[0])
        })
    }, [])

    const setIngredientsList = (data: any) => {
      for(let property in data){
        if(property.includes("strIng") && (data[property] !== "" && data[property] !== null)){
          setIngList(ingList => [...ingList, data[property]])
        } else if(property.includes("strMeasure") && (data[property] !== "" && data[property] !== null)){
          setMeasureList(measureList => [...measureList, data[property]])
        }
      }
    }

    const useStyles = makeStyles((theme) => ({
      paper: {
        position: "absolute",
        width: "60%",
        height: "60%",
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }));

    const classes = useStyles();

    function getModalStyle() {
      const top = 50;
      const left = 50;
  
      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
    }

    return (
        <div>
        <section className="buy-grid container">
    <h1>{meal?.strMeal}</h1>
  <div className="hero-image-wrapper">
  {meal !== undefined ? (
      <abbr title="See how it's made!"><img src={meal!.strMealThumb} className="hero-image-element" alt="alt" onClick={() => setOpen(true)}/> </abbr>
  ) : null}
  </div>

  <div className="selection">
  <div className="selection-row">
      <p>Area: {meal?.strArea}</p>   
      <p>Category: {meal?.strCategory}</p>
      <p>Tags: {meal?.strTags}</p>    
  </div>
  <div className="specs-table">
    <h3>Ingredients</h3>
    {ingList!.map((ingredients: string) => (
      <div className="specs-table-row" key={ingredients}>
        <div className="spec-table-label">{ingredients}</div>
        <div className="spec-table-description">{measureList[ingList.indexOf(ingredients)] !== " " ? measureList[ingList.indexOf(ingredients)]: "According to your taste ;)"}</div>
      </div>
    ))}
  </div>
    <div className="selection-row">
      <h2>How to do it?</h2>
      {meal?.strInstructions}
    </div>
    <div className="selection-row">
      {meal?.strSource !== null && meal?.strSource !== undefined ? (
        <div>
          <h3>For more information: <a href={meal?.strSource}>click here!</a></h3>
      </div>
      ): null}
    </div>
  </div>
</section>
  <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <button className="close" onClick={() => setOpen(false)} style={{position: "absolute", right: "0", top: "0"}}>
            X
          </button>
          {meal?.strYoutube !== "" && meal?.strYoutube !== null && meal?.strYoutube !== undefined ? (
            <iframe
              width="100%"
              height="100%"
              title="trailer"
              src={`https://www.youtube.com/embed/${meal?.strYoutube?.substring(32)}`}
            ></iframe>
          ) : (
            <Warning>{"No trailer found :("}</Warning>
          )}
        </div>
      </Modal>

</div>
    )
}

export default DetailedMeal
