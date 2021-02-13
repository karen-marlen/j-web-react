import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry cursor">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lasaga-blog/media/images/grupo_imagen.original.jpg)'
                }}
            >

            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci et provident odit.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>23</h4>
            </div>
        </div>
    )
}
