export const allergies = [
  {
    resourceType: 'AllergyIntolerance',
    id: 'medication',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medication</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical code 'active' = 'Active', given as 'Active'})</span></p><p><b>verificationStatus</b>: Unconfirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-verification code 'unconfirmed' = 'Unconfirmed', given as 'Unconfirmed'})</span></p><p><b>category</b>: medication</p><p><b>criticality</b>: high</p><p><b>code</b>: Penicillin G <span>(Details : {RxNorm code '7980' = 'Penicillin G', given as 'Penicillin G'})</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>recordedDate</b>: 01/03/2010</p><p><b>recorder</b>: <a>Practitioner/13</a></p><h3>Reactions</h3><table><tr><td>-</td><td><b>Manifestation</b></td></tr><tr><td>*</td><td>Hives <span>(Details : {SNOMED CT code '247472004' = 'Weal', given as 'Hives'})</span></td></tr></table></div>",
    },
    clinicalStatus: {
      coding: [
        {
          system:
            'http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical',
          code: 'active',
          display: 'Active',
        },
      ],
    },
    verificationStatus: {
      coding: [
        {
          system:
            'http://terminology.hl7.org/CodeSystem/allergyintolerance-verification',
          code: 'unconfirmed',
          display: 'Unconfirmed',
        },
      ],
    },
    category: ['medication'],
    criticality: 'high',
    code: {
      coding: [
        {
          system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
          code: '7980',
          display: 'Penicillin G',
        },
      ],
    },
    patient: {
      reference: 'Patient/example',
    },
    recordedDate: '2010-03-01',
    recorder: {
      reference: 'Practitioner/13',
    },
    reaction: [
      {
        manifestation: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '247472004',
                display: 'Hives',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    resourceType: 'AllergyIntolerance',
    id: 'example',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: 49476534</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical code 'active' = 'Active', given as 'Active'})</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/allergyintolerance-verification code 'confirmed' = 'Confirmed', given as 'Confirmed'})</span></p><p><b>type</b>: allergy</p><p><b>category</b>: food</p><p><b>criticality</b>: high</p><p><b>code</b>: Cashew nuts <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew nuts'})</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>onset</b>: 01/01/2004</p><p><b>recordedDate</b>: 09/10/2014 2:58:00 PM</p><p><b>recorder</b>: <a>Practitioner/example</a></p><p><b>asserter</b>: <a>Patient/example</a></p><p><b>lastOccurrence</b>: 01/06/2012</p><p><b>note</b>: The criticality is high becasue of the observed anaphylactic reaction when challenged with cashew extract.</p><blockquote><p><b>reaction</b></p><p><b>substance</b>: cashew nut allergenic extract Injectable Product <span>(Details : {RxNorm code '1160593' = 'cashew nut allergenic extract Injectable Product', given as 'cashew nut allergenic extract Injectable Product'})</span></p><p><b>manifestation</b>: Anaphylactic reaction <span>(Details : {SNOMED CT code '39579001' = 'Anaphylaxis', given as 'Anaphylactic reaction'})</span></p><p><b>description</b>: Challenge Protocol. Severe reaction to subcutaneous cashew extract. Epinephrine administered</p><p><b>onset</b>: 12/06/2012</p><p><b>severity</b>: severe</p><p><b>exposureRoute</b>: Subcutaneous route <span>(Details : {SNOMED CT code '34206005' = 'Subcutaneous route', given as 'Subcutaneous route'})</span></p></blockquote><blockquote><p><b>reaction</b></p><p><b>manifestation</b>: Urticaria <span>(Details : {SNOMED CT code '64305001' = 'Urticaria', given as 'Urticaria'})</span></p><p><b>onset</b>: 01/01/2004</p><p><b>severity</b>: moderate</p><p><b>note</b>: The patient reports that the onset of urticaria was within 15 minutes of eating cashews.</p></blockquote></div>",
    },
    identifier: [
      {
        system: 'http://acme.com/ids/patients/risks',
        value: '49476534',
      },
    ],
    clinicalStatus: {
      coding: [
        {
          system:
            'http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical',
          code: 'active',
          display: 'Active',
        },
      ],
    },
    verificationStatus: {
      coding: [
        {
          system:
            'http://terminology.hl7.org/CodeSystem/allergyintolerance-verification',
          code: 'confirmed',
          display: 'Confirmed',
        },
      ],
    },
    type: 'allergy',
    category: ['food'],
    criticality: 'high',
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '227493005',
          display: 'Cashew nuts',
        },
      ],
    },
    patient: {
      reference: 'Patient/example',
    },
    onsetDateTime: '2004',
    recordedDate: '2014-10-09T14:58:00+11:00',
    recorder: {
      reference: 'Practitioner/example',
    },
    asserter: {
      reference: 'Patient/example',
    },
    lastOccurrence: '2012-06',
    note: [
      {
        text:
          'The criticality is high becasue of the observed anaphylactic reaction when challenged with cashew extract.',
      },
    ],
    reaction: [
      {
        substance: {
          coding: [
            {
              system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
              code: '1160593',
              display: 'cashew nut allergenic extract Injectable Product',
            },
          ],
        },
        manifestation: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '39579001',
                display: 'Anaphylactic reaction',
              },
            ],
          },
        ],
        description:
          'Challenge Protocol. Severe reaction to subcutaneous cashew extract. Epinephrine administered',
        onset: '2012-06-12',
        severity: 'severe',
        exposureRoute: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '34206005',
              display: 'Subcutaneous route',
            },
          ],
        },
      },
      {
        manifestation: [
          {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '64305001',
                display: 'Urticaria',
              },
            ],
          },
        ],
        onset: '2004',
        severity: 'moderate',
        note: [
          {
            text:
              'The patient reports that the onset of urticaria was within 15 minutes of eating cashews.',
          },
        ],
      },
    ],
  },
  {
    resourceType: 'AllergyIntolerance',
    id: 'fishallergy',
    text: {
      status: 'additional',
      div:
        '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>allergy is to fresh fish. Tolerates canned fish</p>\n      <p>recordedDate:2015-08-06T00:00:00-06:00</p>\n      <p>substance:Fish - dietary (substance)</p>\n    </div>',
    },
    identifier: [
      {
        system: 'http://acme.com/ids/patients/risks',
        value: '49476535',
      },
    ],
    clinicalStatus: {
      coding: [
        {
          system:
            'http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical',
          code: 'active',
          display: 'Active',
        },
      ],
    },
    verificationStatus: {
      coding: [
        {
          system:
            'http://terminology.hl7.org/CodeSystem/allergyintolerance-verification',
          code: 'confirmed',
          display: 'Confirmed',
        },
      ],
    },
    category: ['food'],
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '227037002',
          display: 'Fish - dietary (substance)',
        },
      ],
      text: 'Allergic to fresh fish. Tolerates canned fish',
    },
    patient: {
      reference: 'Patient/example',
    },
    recordedDate: '2015-08-06T15:37:31-06:00',
    recorder: {
      reference: 'Practitioner/example',
    },
  },
]
