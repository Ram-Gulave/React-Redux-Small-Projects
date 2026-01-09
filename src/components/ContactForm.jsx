
import React, { useState } from 'react';

const contactFrom = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        options: 'Product Enquiry'
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending.......');

        try {
            const apiEndpoint = 'YOUR_BACKEND_API_ENDPOINT';
            localStorage.setItem('apiEndpointUrl', apiEndpoint);
            // Simulate form submission
            const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                setStatus('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                    options: 'Product Enquiry'
                });
            }
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        }
    }


    return (
        <>
            <div className='my-5'> Contact Form </div>
            <form onSubmit={handleSubmit} className="">
                <div className='grid '>
                    <label htmlFor="fitstName" className=''>First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={(e) => handleChange(e)} required />

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={(e) => handleChange(e)} required />
                </div>
                <div className='grid grid-cols-2 gap-4 '>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={formData.email} onChange={(e) => handleChange(e)} required />

                    <label htmlFor="options">Looking for</label>
                    <select id="options" name="options" value={formData.options} onChange={(e) => handleChange(e)}>
                        <option value="product Enquiry">Product Enquiry</option>
                        <option value="career opportunity">Career opportunity</option>
                        <option value="website development">Website development</option>
                        <option value="software application">Software Application</option>
                        <option value="business process">Business Process</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className='' >Message</label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={(e) => handleChange(e)}></textarea>
                </div>
                <div>
                    <button type="submit" disabled={status === 'Sending.......'} className="btn btn-primary">
                        {status === 'Sending' ? 'Sending....' : 'Submit'}
                    </button>
                    {status && <p>{status}</p>}
                </div>
            </form>
        </>
    )

}

export default contactFrom;