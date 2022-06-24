export const medications = [
  {
    resourceType: 'Medication',
    id: 'med0314',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0314</p><p><b>code</b>: Alprazolam 0.25mg Oral Tablet <span>(Details : {RxNorm code '308047' = 'ALPRAZolam 0.25 MG Oral Tablet', given as 'Alprazolam 0.25mg Oral Tablet'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Alprazolam (substance) <span>(Details : {SNOMED CT code '386983007' = 'Alprazolam', given as 'Alprazolam (substance)'})</span></td><td>0.25 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tablet<span> (Details: SNOMED CT code 385055001 = 'Tablet')</span></td></tr></table></div>",
    },
    code: {
      coding: [
        {
          system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
          code: '308047',
          display: 'Alprazolam 0.25mg Oral Tablet',
        },
      ],
    },
    form: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '385055001',
          display: 'Tablet dose form (qualifier value)',
        },
      ],
    },
    ingredient: [
      {
        itemCodeableConcept: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '386983007',
              display: 'Alprazolam (substance)',
            },
          ],
        },
        strength: {
          numerator: {
            value: 0.25,
            system: 'http://unitsofmeasure.org',
            code: 'mg',
          },
          denominator: {
            value: 1,
            unit: 'Tablet',
            system: 'http://snomed.info/sct',
            code: '385055001',
          },
        },
      },
    ],
  },
  {
    resourceType: 'Medication',
    id: 'med0310',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0310</p><p><b>contained</b>: </p><p><b>code</b>: Oral Form Oxycodone (product) <span>(Details : {SNOMED CT code '430127000' = 'Oral form oxycodone', given as 'Oral Form Oxycodone (product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Oxycodone (substance) <span>(Details : {SNOMED CT code '55452001' = 'Oxycodone', given as 'Oxycodone (substance)'})</span></td><td>5 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>",
    },
    contained: [
      {
        resourceType: 'Substance',
        id: 'sub03',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '55452001',
              display: 'Oxycodone (substance)',
            },
          ],
        },
      },
    ],
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '430127000',
          display: 'Oral Form Oxycodone (product)',
        },
      ],
    },
    form: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '385055001',
          display: 'Tablet dose form (qualifier value)',
        },
      ],
    },
    ingredient: [
      {
        itemReference: {
          reference: '#sub03',
        },
        strength: {
          numerator: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg',
          },
          denominator: {
            value: 1,
            system:
              'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
            code: 'TAB',
          },
        },
      },
    ],
  },
  {
    resourceType: 'Medication',
    id: 'med0311',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0311</p><p><b>contained</b>: </p><p><b>code</b>: Prednisone 5mg tablet (Product) <span>(Details : {SNOMED CT code '373994007' = 'Prednisone 5mg tablet', given as 'Prednisone 5mg tablet (Product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Prednisone (substance) <span>(Details : {SNOMED CT code '116602009' = 'Prednisone', given as 'Prednisone (substance)'})</span></td><td>5 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>",
    },
    contained: [
      {
        resourceType: 'Substance',
        id: 'sub03',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '116602009',
              display: 'Prednisone (substance)',
            },
          ],
        },
      },
    ],
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '373994007',
          display: 'Prednisone 5mg tablet (Product)',
        },
      ],
    },
    form: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '385055001',
          display: 'Tablet dose form (qualifier value)',
        },
      ],
    },
    ingredient: [
      {
        itemReference: {
          reference: '#sub03',
        },
        strength: {
          numerator: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg',
          },
          denominator: {
            value: 1,
            system:
              'http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm',
            code: 'TAB',
          },
        },
      },
    ],
  },
  {
    resourceType: 'Medication',
    id: 'med0315',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0315</p><p><b>code</b>: Mometasone Furoate 0.05mg/Actuat <span>(Details : {RxNorm code '358793' = 'mometasone furoate 0.05 MG/ACTUAT', given as 'Mometasone Furoate 0.05mg/Actuat'})</span></p><p><b>form</b>: Nasal Spray <span>(Details : {SNOMED CT code '385157007' = 'Nasal spray', given as 'Nasal Spray'})</span></p></div>",
    },
    code: {
      coding: [
        {
          system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
          code: '358793',
          display: 'Mometasone Furoate 0.05mg/Actuat',
        },
      ],
    },
    form: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '385157007',
          display: 'Nasal Spray',
        },
      ],
    },
  },
  {
    resourceType: 'Medication',
    id: 'med0313',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0313</p><p><b>code</b>: Lorazepam 2mg/ml injection solution 1ml vial (product) <span>(Details : {SNOMED CT code '400621001' = 'Lorazepam 2mg/mL injection solution 1mL vial', given as 'Lorazepam 2mg/ml injection solution 1ml vial (product)'})</span></p><p><b>form</b>: Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><p><b>amount</b>: 1 ml<span> (Details: UCUM code ml = 'ml')</span>/1 vial<span> (Details: http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type code vial = 'Vial')</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Lorazepam (substance) <span>(Details : {SNOMED CT code '387106007' = 'Lorazepam', given as 'Lorazepam (substance)'})</span></td><td>2 mg<span> (Details: UCUM code mg = 'mg')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table></div>",
    },
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '400621001',
          display: 'Lorazepam 2mg/ml injection solution 1ml vial (product)',
        },
      ],
    },
    form: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '385219001',
          display: 'Injection solution (qualifier value)',
        },
      ],
    },
    amount: {
      numerator: {
        value: 1,
        unit: 'ml',
        system: 'http://unitsofmeasure.org',
        code: 'ml',
      },
      denominator: {
        value: 1,
        system:
          'http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type',
        code: 'vial',
      },
    },
    ingredient: [
      {
        itemCodeableConcept: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '387106007',
              display: 'Lorazepam (substance)',
            },
          ],
        },
        strength: {
          numerator: {
            value: 2,
            system: 'http://unitsofmeasure.org',
            code: 'mg',
          },
          denominator: {
            value: 1,
            system: 'http://unitsofmeasure.org',
            code: 'mL',
          },
        },
      },
    ],
  },
  {
    resourceType: 'Medication',
    id: 'med0312',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0312</p><p><b>contained</b>: </p><p><b>code</b>: Nystatin 100,000 units/ml oral suspension (product) <span>(Details : {SNOMED CT code '324689003' = 'Nystatin 100,000units/mL oral suspension', given as 'Nystatin 100,000 units/ml oral suspension (product)'})</span></p><p><b>form</b>: Oral suspension (qualifier value) <span>(Details : {SNOMED CT code '387048002' = 'Nystatin', given as 'Oral suspension (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub02; Nystatin (substance) <span>(Details : {SNOMED CT code '387048002' = 'Nystatin', given as 'Nystatin (substance)'})</span></td><td>100000 [IU]<span> (Details: UCUM code [IU] = 'IU')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table></div>",
    },
    contained: [
      {
        resourceType: 'Substance',
        id: 'sub02',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '387048002',
              display: 'Nystatin (substance)',
            },
          ],
        },
      },
    ],
    code: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '324689003',
          display: 'Nystatin 100,000 units/ml oral suspension (product)',
        },
      ],
    },
    form: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '387048002',
          display: 'Oral suspension (qualifier value)',
        },
      ],
    },
    ingredient: [
      {
        itemReference: {
          reference: '#sub02',
        },
        strength: {
          numerator: {
            value: 100000,
            system: 'http://unitsofmeasure.org',
            code: '[IU]',
          },
          denominator: {
            value: 1,
            system: 'http://unitsofmeasure.org',
            code: 'mL',
          },
        },
      },
    ],
  },
]
