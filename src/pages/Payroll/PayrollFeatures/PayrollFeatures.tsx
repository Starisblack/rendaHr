import React from "react"
import "./PayrollFeatures.css"
import FeatureOne from "./FeatureOne/FeatureOne"
import FeatureTwo from "./FeatureTwo/FeatureTwo"
import FeatureThree from "./FeatureThree/FeatureThree"

const PayrollFeatures = () => {
    return (
        <div className="features">

         <FeatureOne />
         <FeatureTwo />
         <FeatureThree />
         
        </div>
    )
}

export default PayrollFeatures