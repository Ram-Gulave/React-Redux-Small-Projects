import { useSelector, useDispatch } from 'react-redux';
import { submitData, resetForm, next, previous } from '../redux/multiFormSilce';

const Step1 = ({ next, formData, submitData }) => {
    return (
        <div className="bg-gray-200">
            <input
                type="text"
                name="fname"
                placeholder="Enter the first name...."
                value={formData.fname}
                onChange={(e) => submitData("fname", e.target.value)}
            />
            <input
                type="text"
                name="lname"
                placeholder="Enter the last name...."
                value={formData.lname}
                onChange={(e) => submitData("lname", e.target.value)}
            />            
            <input
                type="email"
                name="email"
                placeholder="Enter the email...."
                value={formData.email}
                onChange={(e) => submitData("email", e.target.value)}
            />
            <button onClick={next}>Next</button>
        </div>
    )
}

const Step2 = ({ next, previous, formData, submitData }) => {
    return (
        <div className="bg-gray-200">   
            <input
                type="text"
                name="number"
                placeholder="Enter the Mobile Number...."
                value={formData.number}
                onChange={(e) => submitData("number", e.target.value)}
            />
            <input
                type="number"
                name="tmarks"
                placeholder="Enter the SSC Marks...."
                value={formData.tmarks}
                onChange={(e) => submitData("tmarks", e.target.value)}
            />
            <input
                type="number"
                name="hmarks"
                placeholder="Enter the HSC Marks...."
                value={formData.hmarks}
                onChange={(e) => submitData("hmarks", e.target.value)}
            />  
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

const Step3 = ({ next, previous, formData, submitData }) => {
    return (
        <div className="bg-gray-200">
            <input
                type="checkbox"
                name="intern"
                checked={formData.intern}
                onChange={(e) => submitData("intern", e.target.checked)}
            />
            Click here.. If you done an Internship
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

const Step4 = ({ previous, resetForm, formData }) => {
    return (
        <div className="bg-gray-200">
            <h2>Step 4 Form</h2>
            <p>First Name: {formData.fname}</p>
            <p>Last Name: {formData.lname}</p>
            <p>Email: {formData.email}</p>
            <p>Mobile Number: {formData.number}</p>
            <p>SSC Marks: {formData.tmarks}</p>
            <p>HSC Marks: {formData.hmarks}</p>
            <p>Internship Done: {formData.intern ? "Yes" : "No"}</p>
            <button onClick={previous}>Previous</button>
            <button onClick={resetForm}>Reset</button>
        </div>
    )
}




const MultiPageFormRTK = () => {
    const dispatch = useDispatch();
    const step = useSelector((state) => state.form.step);
    const formData = useSelector((state) => state.form.formData);
    return (
        <div>
            {step === 1 &&
                <Step1
                    next={() => dispatch(next())}
                    formData={formData}
                    submitData={(field, value) => dispatch(submitData({ field, value }))}
                />
            }
            {step === 2 &&
                <Step2
                    next={() => dispatch(next())}
                    previous={() => dispatch(previous())}
                    formData={formData}
                    submitData={(field, value) => dispatch(submitData({ field, value }))}
                />
            }
            {step === 3 &&
                <Step3
                    next={() => dispatch(next())}
                    previous={() => dispatch(previous())}
                    formData={formData}
                    submitData={(field, value) => dispatch(submitData({ field, value }))}
                />

            }
            {step === 4 &&
                <Step4
                    previous={() => dispatch(previous())}
                    resetForm={() => dispatch(resetForm())}
                    formData={formData}
                    submitData={(field, value) => dispatch(submitData({ field, value }))}
                />
            }
        </div>
    )
}

export default MultiPageFormRTK;    