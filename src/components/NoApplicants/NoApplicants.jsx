import React from 'react';
import noApplicantImg from '../../assets/no-applicant.png';

const NoApplicants = () => {
    return (
        <div className="no-applicants">
            <img src={noApplicantImg} alt="no applicants" />
            <p>No Applications available</p>
        </div>
    )
}

export default NoApplicants;