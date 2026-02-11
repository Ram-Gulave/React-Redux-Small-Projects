import { useState } from 'react';

const Step1 = ({ next, fromData, setFromData }) => {
    return (
        <div className="bg-gray-200">
            <div className="flex justify-center">
                <h2>Step 1 Form</h2>
            </div>
            <div className="flex justify-center items-center">
                <input type="text" name="fname" id="fname" placeholder="Enter the first name...." value={fromData.fname} onChange={(e) => setFromData({ ...fromData, fname: e.target.value })} /><br />
                <input type="text" name="lname" id="lname" placeholder="Enter the last name...." value={fromData.lname} onChange={(e) => setFromData({ ...fromData, lname: e.target.value })} /><br />
                <input type="email" name="email" id="email" placeholder="Enter the email...." value={fromData.email} onChange={(e) => setFromData({...fromData, email: e.target.value})} />
            </div>
            <div className="flex justify-center pb-10 gap-4">
                <button onClick={next} className="bg-amber-700 px-6 py-2 rounded-3xl">Next</button>
            </div>
        </div>
    )
}

const Step2 = ({ next, previous, fromData, setFromData }) => {
    return (
        <>
            <div className="bg-gray-200">
                <h2 className="flex justify-center">Step 2 From</h2>
                <div className="flex justify-center items-center">
                    <input type="type" id="number" name="number" placeholder="Enter the Mobile Number...." value={fromData.number} onChange={(e) => setFromData({ ...fromData, number: e.target.value })} />
                    <input type="number" id="tmarks" name="tmarks" placeholder="Enter the SSC Marks...." value={fromData.tmarks} onChange={(e) => setFromData({ ...fromData, tmarks: e.target.value })} />
                    <input type="number" id="hmarks" name="hmarks" placeholder="Enter the HSC Marks...." value={fromData.hmarks} onChange={(e) => setFromData({ ...fromData, hmarks: e.target.value })} />
                </div>
                <div className="bg-gray-200 flex justify-center pb-10 gap-4">
                    <button onClick={previous} className="bg-amber-700 px-6 py-2 rounded-3xl">Previous</button>
                    <button onClick={next} className="bg-amber-700 px-6 py-2 rounded-3xl ">Next</button>
                </div>
            </div>
        </>
    )
}

const Step3 = ({ next, previous, fromData, setFromData }) => {
    return (
        <>  
            <div className="bg-gray-200">
                <div className="flex justify-center items-center ">
                    <h2>Step 3 Form</h2>
                </div>
                <div className="flex justify-center items-center">
                    <input type="checkbox" name="checkbox" checked={fromData.intern} onChange={(e) => setFromData({ ...fromData, intern: e.target.checked })} />
                    Click here.. If you done an Internship
                </div>  
                <div className="flex justify-center pb-10 gap-4">
                    <button onClick={previous} className="bg-amber-700 px-6 py-2 rounded-3xl">Previous</button>
                    <button onClick={next} className="bg-amber-700 px-6 py-2 rounded-3xl">Next</button>
                </div>
            </div>
        </>
    )
}

const Step4 = ({ previous, fromData }) => {
    return (
        <>
            <div className="bg-gray-200">
                <div className="flex justify-center items-center ">
                    <h2>Step 4 Form</h2>
                </div>
                <div className="flex justify-center items-center">
                    <p>First Name : {fromData.fname}</p><br />
                    <p>Last Name : {fromData.lname}</p><br />
                    <p>Email : {fromData.email}</p><br />
                    <p>Mobile Number : {fromData.number}</p><br />
                    <p>SSC Marks : {fromData.tmarks}</p><br />
                    <p>HSC Marks : {fromData.hmarks}</p><br />
                    <p>Internship Done : {fromData.intern ? "Yes" : "No"}</p><br />
                </div>  
                <div className="flex justify-center pb-10 gap-4">
                    <button onClick={previous} className="bg-amber-700 px-6 py-2 rounded-3xl">Previous</button>
                </div>
            </div>
        </>
    )
}


const MultiFormHandler = () => {
    const [step, setStep] = useState(1);
    const [fromData, setFromData] = useState({
        fname: "",
        lname: "",
        email: "",
        number: "",
        tmarks: "",
        hmarks: "",
        intern: false
    });

    const next = () => {
        setStep(step => step + 1);
    }

    const previous = () => {
        setStep(step => step - 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {step === 1 && <Step1 fromData={fromData} setFromData={setFromData} next={next} />}
                {step === 2 && <Step2 fromData={fromData} setFromData={setFromData} previous={previous} next={next} />}
                {step === 3 && <Step3 fromData={fromData} setFromData={setFromData} previous={previous} next={next} />}
                {step === 4 && <Step4 fromData={fromData} previous={previous} />}
            </form>
        </div>
    )
}

const MultiForm = () => {
    return (
        <>
            <h1>Multi Page Form Component</h1>
            <MultiFormHandler />
        </>
    )
};

export default MultiForm