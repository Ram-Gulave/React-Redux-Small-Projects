import { useState } from "react";

const Step1 = ({ next }) => {
    // const [step1, setStep1] = useState()
    return (
        <>
            <div>
                <h2>Step 1 Form</h2>
                <button onClick={next}>Next</button>
            </div>
        </>
    )
}


const Step2 = ({ next, previous }) => {
    return (
        <>
            <div>
                <h2>Step 2 From</h2>
                <button onClick={next}>Next</button>
                <button onClick={previous}>Previous</button>
            </div>
        </>
    )
}


const Step3 = ({ previous }) => {
    return (
        <>
            <div>
                <h2>Step 3 Form</h2>
                <button onClick={previous}>Previous</button>
            </div>
        </>
    )
}

const MultiFormHandler = () => {

    const [step, setStep] = useState(1)

    const next = () => {
        setStep(step => step + 1)
    }

    const previous = () => {
        setStep((step) => step - 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: gather state & submit
        alert("Form submitted!");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {step === 1 && <Step1 next={next} />}
                {step === 2 && <Step2 next={next} previous={previous} />}
                {step === 3 && <Step3 previous={previous} />}
            </form>
        </>
    )
}

const MultiForm = () => {
    return (
        <div>
            <h1>MultiForm</h1>
            <MultiFormHandler />
        </div>
    )
}

export default MultiForm;