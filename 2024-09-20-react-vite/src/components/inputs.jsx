import React, { useState } from 'react';

const Input = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        image: '',
        content: '',
        author: '',
        authorRole: '',
        authorImage: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className='inputContainer'>
            {submitted && (
                <div className='submissionData'>
               
                    <p>{formData.title}</p>
                    <p>{formData.category}</p>
                    <p style={{color: 'gray'}}>{formData.content}</p>
                    <p style={{marginLeft: '60px'}}>{formData.author}</p>
                    <p style={{marginLeft: '60px', color: 'gray'}}>{formData.authorRole}</p>
                    
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className='inputBlokelis'>
                    <h3 style={{ color: 'gray' }}>Post Title</h3>
                    <input name='title' className='inputStyle' aria-label='Post Title' onChange={handleChange} />
                </div>

                <div className='inputBlokelis'>
                    <h3 style={{ color: 'gray' }}>Post Category</h3>
                    <input name='category' className='inputStyle' aria-label='Post Category' onChange={handleChange}/>
                </div>

                <div className='inputBlokelis'>
                    <h3 style={{ color: 'gray'}}>Post Image</h3>
                    <input name='image' className='inputStyle' aria-label='Post Image' onChange={handleChange} />
                    {formData.image && (
                        <img src={formData.image} alt='Post'  style={{ width: '380px', height: '150px', position: 'absolute', bottom: '600px', left: '70px', borderRadius: '10px' }} />
                    )}
                </div>

                <div className='inputBlokelis'>
                    <h3 style={{ color: 'gray' }}>Post Content</h3>
                    <input name='content' className='inputStyle' aria-label='Post Content' onChange={handleChange} />
                </div>

                <div className='inputBlokelis'>
                    <h3 style={{ color: 'gray' }}>Post Author</h3>
                    <input name='author' className='inputStyle' aria-label='Post Author' onChange={handleChange} />
                </div>

                <div className='inputBlokelis'>
                    <h3 style={{ color: 'gray' }}>Post Author Role</h3>
                    <input name='authorRole' className='inputStyle' onChange={handleChange}/>
                </div>

                <div className='inputBlokelis'>
                    <h3 style={{ color: 'gray' }}>Post Author Image</h3>
                    <input name='authorImage' className='inputStyle' aria-label='Post Author Image' onChange={handleChange}/>
                    {formData.authorImage && (
                        <img src={formData.authorImage} alt='Author' style={{ width: '50px', height: '50px', position: 'absolute', bottom: '370px', left: '70px', borderRadius: '50px' }}/>
                    )}
                </div>

                <div className='inputBlokelis'>
                    <button type='submit' className='buttonStyle'>SUBMIT</button>
                </div>
            </form>
        </div>
    );
};

export default Input;
