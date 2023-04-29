import "./FeatureOne.css"
import React from "react"
import employee from "../../../../assets/images/employee.jpg"
import ImageContent from "../FeaturesCard/ImageContent/ImageContent"
import Description from "../FeaturesCard/Description/Description"

const FeatureOne = () => {
    return (
        <section id="featureOne">
            <div className="grid min-[992px]:grid-cols-2">
                <div>
                    <ImageContent img={employee}
                      height="80%"
                      width="80%"
                     />
                </div>
                <div>
                    <Description 
                        title="Compute Payroll Automatically"
                        subTitle="Get rid of the pitfalls that comes with manual payroll computations."
                        desc="With RendaHR, you can compute allowances and deductions quickly, seamlessly and easily."
                    />
                </div>

            </div>
        </section>
    )
}

export default FeatureOne