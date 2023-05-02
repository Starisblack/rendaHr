import "./FeatureTwo.css"
import ImageContent from "../FeaturesCard/ImageContent/ImageContent"
import Description from "../FeaturesCard/Description/Description"
import payroll from "../../../../assets/images/payroll.jpg"
import Button from "../../../../components/UI/Button/Button"
import React from "react"


const FeatureTwo = () => {


    return (
        <section className="feature-two">
            <div className="grid min-[992px]:grid-cols-2  f2-container">

                <div className="f2-desc">
                    <Description
                        title="Error free Payroll processing."
                        desc="With our layered payroll approvals, there is possibly no way anyone on your team will make a mistake with your payroll disbursement."
                    />
                  <div style={{marginTop: "40px"}}>

                  <Button title="Get Started Now" link="/get-started" />
                  </div>
                </div>

                <div>
                    <ImageContent img={payroll}
                        height="80%"
                        width="80%"
                    />
                </div>

            </div>
        </section>
    )
}

export default FeatureTwo