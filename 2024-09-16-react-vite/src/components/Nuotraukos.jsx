import React from 'react';

const Nuotraukos = (props) => {
    const { images } = props;

    return (
        <div className="column">
            {images.map((image, index) => (
                <img 
                    key={index}
                    className={image.className}
                    src={image.src}
                    alt={image.alt}
                    style={image.style}
                />
            ))}
        </div>
    );
}

export default Nuotraukos;
