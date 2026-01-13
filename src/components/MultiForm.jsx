import { useState } from "react";

const Step1 = ({ formData, setFormData, next }) => {
    return (
        <div className="bg-gray-200">
            <div className="flex justify-center">
                <h2>Step 1 Form</h2>
            </div>
            <div className="flex justify-center items-center">
                <input type="text" name="fname" id="fname" placeholder="Enter the first name...." value={formData.fname} onChange={(e) =>  setFormData({...formData, fname:e.target.value})} /><br />
                <input type="text" name="lname" id="lname" placeholder="Enter the last name...." value={formData.lname} onChange={(e) => setFormData({...formData, lname:e.target.value})} /><br />
                <input type="email" name="email" id="email" placeholder="Enter the email...." value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})} />
            </div>
            <div className="flex justify-center pb-10 gap-4">
                <button onClick={next} className="bg-amber-700 px-6 py-2 rounded-3xl">Next</button>
            </div>
        </div>
    )
}


const Step2 = ({ formData, setFormData, next, previous }) => {
    return (
        <>
            <div className="bg-gray-200">
                <h2 className="flex justify-center">Step 2 From</h2>
                <div className="flex justify-center items-center">
                    <input type="type" id="number" name="number" placeholder="Enter the Mobile Number...." value={formData.number} onChange={(e) => setFormData({...formData, number: e.target.value})} />
                    <input type="number" id="tmarks" name="tmarks" placeholder="Enter the SSC Marks...." value={formData.tmarks} onChange={(e) => setFormData({...formData, tmarks: e.target.value})} />
                    <input type="number" id="hmarks" name="hmarks" placeholder="Enter the HSC Marks...." value={formData.hmarks} onChange={(e) => setFormData({ ...formData, hmarks: e.target.value})} />
                </div>
                <div className="bg-gray-200 flex justify-center pb-10 gap-4">
                    <button onClick={next} className="bg-amber-700 px-6 py-2 rounded-3xl ">Next</button>
                    <button onClick={previous} className="bg-amber-700 px-6 py-2 rounded-3xl">Previous</button>
                </div>
            </div>
        </>
    )
}


const Step3 = ({formData, setFormData, next, previous }) => {
    return (
        <>
            <div className="bg-gray-200">
                <div className="flex justify-center items-center ">
                    <h2>Step 3 Form</h2>
                </div>
                <div className="flex justify-center items-center">
                    <input type="checkbox" name="checkbox" checked={formData.intern} onChange={(e) => setFormData({...formData, intern:e.target.checked})} />
                    Click here.. If you done an Internship
                </div>
                <div className="flex justify-center pb-10 gap-4">
                    <button onClick={next} className="bg-amber-700 px-6 py-2 rounded-3xl">Next</button>
                    <button onClick={previous} className="bg-amber-700 px-6 py-2 rounded-3xl">Previous</button>
                </div>
            </div>
        </>
    )
}

const Review = ({ formData, submit, previous }) => {
    return (
        <div>
            <h2>Review Application</h2>
                <pre>
                    {JSON.stringify(formData, null, 2)}
                </pre>
            <div>
                <button onClick={previous} className="bg-amber-700 px-6 py-2 rounded-3xl">Back</button>
                <button onClick={submit} className="bg-amber-700 px-6 py-2 rounded-3xl">Submit</button>
            </div>
        </div>
    )
}

const MultiFormHandler = () => {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        number: "",
        tmarks: "",
        hmarks: "",
        intern: false
    })

    const [step, setStep] = useState(1)

    const next = () => {
        setStep(step => step + 1)
    }

    const previous = () => {
        setStep((step) => step - 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // TODO: gather state & submit
        // alert("Form submitted!");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {step === 1 && <Step1 formData={formData} setFormData={setFormData} next={next} />}
                {step === 2 && <Step2 formData={formData} setFormData={setFormData} next={next} previous={previous} />}
                {step === 3 && <Step3 formData={formData} setFormData={setFormData} next={next} previous={previous} />}
                {step === 4 && <Review formData={formData} submit={handleSubmit} previous={previous} />}
            </form>
        </>
    )
}

const MultiForm = () => {
    return (
        <div>
            <h1 className="flex justify-center items-center bg-gray-200 pt-10">MultiForm</h1>
            <MultiFormHandler />
        </div>
    )
}

export default MultiForm;