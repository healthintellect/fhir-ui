export const conditions = [
  {
    resourceType: 'Condition',
    id: 'f001',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: diagnosis <span>(Details : {SNOMED CT code '439401001' = 'Diagnosis', given as 'diagnosis'})</span></p><p><b>severity</b>: Moderate <span>(Details : {SNOMED CT code '6736007' = 'Moderate', given as 'Moderate'})</span></p><p><b>code</b>: Heart valve disorder <span>(Details : {SNOMED CT code '368009' = 'Heart valve disorder', given as 'Heart valve disorder'})</span></p><p><b>bodySite</b>: heart structure <span>(Details : {SNOMED CT code '40768004' = 'Left thorax', given as 'Left thorax'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f001</a></p><p><b>onset</b>: 05/08/2011</p><p><b>recordedDate</b>: 05/10/2011</p><p><b>asserter</b>: <a>P. van de Heuvel</a></p><h3>Evidences</h3><table><tr><td>-</td><td><b>Code</b></td></tr><tr><td>*</td><td>Cardiac chest pain <span>(Details : {SNOMED CT code '426396005' = 'Cardiac chest pain', given as 'Cardiac chest pain'})</span></td></tr></table></div>",
    },
    clinicalStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
          code: 'active',
        },
      ],
    },
    verificationStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
          code: 'confirmed',
        },
      ],
    },
    category: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '439401001',
            display: 'diagnosis',
          },
        ],
      },
    ],
    severity: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '6736007',
          display: 'Moderate',
        },
      ],
    },
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '368009',
          display: 'Heart valve disorder',
        },
      ],
    },
    bodySite: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '40768004',
            display: 'Left thorax',
          },
        ],
        text: 'heart structure',
      },
    ],
    subject: {
      reference: 'Patient/f001',
      display: 'P. van de Heuvel',
    },
    encounter: {
      reference: 'Encounter/f001',
    },
    onsetDateTime: '2011-08-05',
    recordedDate: '2011-10-05',
    asserter: {
      reference: 'Patient/f001',
      display: 'P. van de Heuvel',
    },
    evidence: [
      {
        code: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '426396005',
                display: 'Cardiac chest pain',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    resourceType: 'Condition',
    id: 'example2',
    text: {
      status: 'generated',
      div:
        '<div xmlns="http://www.w3.org/1999/xhtml">Mild Asthma (Date: 12-Nov 2012)</div>',
    },
    clinicalStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
          code: 'active',
        },
      ],
    },
    verificationStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
          code: 'confirmed',
        },
      ],
    },
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/condition-category',
            code: 'problem-list-item',
            display: 'Problem List Item',
          },
        ],
      },
    ],
    severity: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '255604002',
          display: 'Mild',
        },
      ],
    },
    code: {
      text: 'Asthma',
    },
    subject: {
      reference: 'Patient/example',
    },
    onsetString: 'approximately November 2012',
  },
  {
    resourceType: 'Condition',
    id: 'f201',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>identifier</b>: 12345</p><p><b>clinicalStatus</b>: Resolved <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'resolved' = 'Resolved)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: Problem <span>(Details : {SNOMED CT code '55607006' = 'Problem', given as 'Problem'}; {http://terminology.hl7.org/CodeSystem/condition-category code 'problem-list-item' = 'Problem List Item)</span></p><p><b>severity</b>: Mild <span>(Details : {SNOMED CT code '255604002' = 'Mild', given as 'Mild'})</span></p><p><b>code</b>: Fever <span>(Details : {SNOMED CT code '386661006' = 'Fever', given as 'Fever'})</span></p><p><b>bodySite</b>: Entire body as a whole <span>(Details : {SNOMED CT code '38266002' = 'Body as a whole', given as 'Entire body as a whole'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>encounter</b>: <a>Encounter/f201</a></p><p><b>onset</b>: 02/04/2013</p><p><b>abatement</b>: around April 9, 2013</p><p><b>recordedDate</b>: 04/04/2013</p><p><b>recorder</b>: <a>Practitioner/f201</a></p><p><b>asserter</b>: <a>Practitioner/f201</a></p><h3>Evidences</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Detail</b></td></tr><tr><td>*</td><td>degrees C <span>(Details : {SNOMED CT code '258710007' = 'degrees C', given as 'degrees C'})</span></td><td><a>Temperature</a></td></tr></table></div>",
    },
    identifier: [
      {
        value: '12345',
      },
    ],
    clinicalStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
          code: 'resolved',
        },
      ],
    },
    verificationStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
          code: 'confirmed',
        },
      ],
    },
    category: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '55607006',
            display: 'Problem',
          },
          {
            system: 'http://terminology.hl7.org/CodeSystem/condition-category',
            code: 'problem-list-item',
          },
        ],
      },
    ],
    severity: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '255604002',
          display: 'Mild',
        },
      ],
    },
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '386661006',
          display: 'Fever',
        },
      ],
    },
    bodySite: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '38266002',
            display: 'Entire body as a whole',
          },
        ],
      },
    ],
    subject: {
      reference: 'Patient/f201',
      display: 'Roel',
    },
    encounter: {
      reference: 'Encounter/f201',
    },
    onsetDateTime: '2013-04-02',
    abatementString: 'around April 9, 2013',
    recordedDate: '2013-04-04',
    recorder: {
      reference: 'Practitioner/f201',
    },
    asserter: {
      reference: 'Practitioner/f201',
    },
    evidence: [
      {
        code: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '258710007',
                display: 'degrees C',
              },
            ],
          },
        ],
        detail: [
          {
            reference: 'Observation/f202',
            display: 'Temperature',
          },
        ],
      },
    ],
  },
  {
    resourceType: 'Condition',
    id: 'f205',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f205</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Differential <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'differential' = 'Differential)</span></p><p><b>code</b>: Bacterial infectious disease <span>(Details : {SNOMED CT code '87628006' = 'Bacterial infectious disease', given as 'Bacterial infectious disease'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>recordedDate</b>: 04/04/2013</p><p><b>asserter</b>: <a>Practitioner/f201</a></p></div>",
    },
    clinicalStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
          code: 'active',
        },
      ],
    },
    verificationStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
          code: 'differential',
        },
      ],
    },
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '87628006',
          display: 'Bacterial infectious disease',
        },
      ],
    },
    subject: {
      reference: 'Patient/f201',
      display: 'Roel',
    },
    recordedDate: '2013-04-04',
    asserter: {
      reference: 'Practitioner/f201',
    },
  },
  {
    resourceType: 'Condition',
    id: 'f003',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: diagnosis <span>(Details : {SNOMED CT code '439401001' = 'Diagnosis', given as 'diagnosis'})</span></p><p><b>severity</b>: Mild to moderate <span>(Details : {SNOMED CT code '371923003' = 'Mild to moderate', given as 'Mild to moderate'})</span></p><p><b>code</b>: Retropharyngeal abscess <span>(Details : {SNOMED CT code '18099001' = 'Retropharyngeal abscess', given as 'Retropharyngeal abscess'})</span></p><p><b>bodySite</b>: Entire retropharyngeal area <span>(Details : {SNOMED CT code '280193007' = 'Retropharyngeal space', given as 'Entire retropharyngeal area'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f003</a></p><p><b>onset</b>: 27/02/2012</p><p><b>recordedDate</b>: 20/02/2012</p><p><b>asserter</b>: <a>P. van de Heuvel</a></p><h3>Evidences</h3><table><tr><td>-</td><td><b>Code</b></td></tr><tr><td>*</td><td>CT of neck <span>(Details : {SNOMED CT code '169068008' = 'CT of neck', given as 'CT of neck'})</span></td></tr></table></div>",
    },
    clinicalStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
          code: 'active',
        },
      ],
    },
    verificationStatus: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
          code: 'confirmed',
        },
      ],
    },
    category: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '439401001',
            display: 'diagnosis',
          },
        ],
      },
    ],
    severity: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '371923003',
          display: 'Mild to moderate',
        },
      ],
    },
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '18099001',
          display: 'Retropharyngeal abscess',
        },
      ],
    },
    bodySite: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '280193007',
            display: 'Entire retropharyngeal area',
          },
        ],
      },
    ],
    subject: {
      reference: 'Patient/f001',
      display: 'P. van de Heuvel',
    },
    encounter: {
      reference: 'Encounter/f003',
    },
    onsetDateTime: '2012-02-27',
    recordedDate: '2012-02-20',
    asserter: {
      reference: 'Patient/f001',
      display: 'P. van de Heuvel',
    },
    evidence: [
      {
        code: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '169068008',
                display: 'CT of neck',
              },
            ],
          },
        ],
      },
    ],
  },
]
