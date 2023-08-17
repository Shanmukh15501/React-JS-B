import React from "react"
import Card from "./Card"

const CardSection = () =>(



        <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
             <Card title="Learn Code Online"/>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
            <Card title="2nd Card" buttonText="Click 2nd"/>

            </div>
          </div>
          <div className="col-4">
          <Card title="3rd Card" buttonText="Click 3rd"/>  
        </div>
        </div>
      </div>
    </section>

    )


export default CardSection