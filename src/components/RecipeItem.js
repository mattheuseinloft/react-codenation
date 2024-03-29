import React from 'react'

const RecipeItem = (props) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={props.image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{props.ingredients}
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;
