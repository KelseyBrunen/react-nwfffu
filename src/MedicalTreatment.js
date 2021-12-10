import React from 'react';
import './style.css';

treatId = '24849303';
treatCourseId = '89749083';
type = 'Curative;';
category = 'Chemotherapy';
patient = 'Nathaniel';
startDate = '03/05/2019';

function Medical(props) {
  return (
    <div>
      {props.treatId} {props.treatCourseId} {props.type} {props.category}
      {props.patient} {props.startDate}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MedicalTreatment
        patient={patient}
        TreatmentId={treatId}
        treatCourseId={treatCourseId}
        type={type}
        startDate={startDate}
      />
    </div>
  );
}
