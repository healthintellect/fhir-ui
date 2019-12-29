export const observations = [
  {
    resourceType: 'Observation',
    id: 'f001',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 6323 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 9:30:10 AM --&gt; (ongoing)</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 6.3 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>3.1 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>6.2 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>",
    },
    identifier: [
      {
        use: 'official',
        system: 'http://www.bmc.nl/zorgportal/identifiers/observations',
        value: '6323',
      },
    ],
    status: 'final',
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '15074-8',
          display: 'Glucose [Moles/volume] in Blood',
        },
      ],
    },
    subject: {
      reference: 'Patient/f001',
      display: 'P. van de Heuvel',
    },
    effectivePeriod: {
      start: '2013-04-02T09:30:10+01:00',
    },
    issued: '2013-04-03T15:30:10+01:00',
    performer: [
      {
        reference: 'Practitioner/f005',
        display: 'A. Langeveld',
      },
    ],
    valueQuantity: {
      value: 6.3,
      unit: 'mmol/l',
      system: 'http://unitsofmeasure.org',
      code: 'mmol/L',
    },
    interpretation: [
      {
        coding: [
          {
            system:
              'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'H',
            display: 'High',
          },
        ],
      },
    ],
    referenceRange: [
      {
        low: {
          value: 3.1,
          unit: 'mmol/l',
          system: 'http://unitsofmeasure.org',
          code: 'mmol/L',
        },
        high: {
          value: 6.2,
          unit: 'mmol/l',
          system: 'http://unitsofmeasure.org',
          code: 'mmol/L',
        },
      },
    ],
  },
  {
    resourceType: 'Observation',
    id: 'f004',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f004</p><p><b>identifier</b>: 6326 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Erythrocytes [#/volume] in Blood by Automated count <span>(Details : {LOINC code '789-8' = 'Erythrocytes [#/volume] in Blood by Automated count', given as 'Erythrocytes [#/volume] in Blood by Automated count'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 4.12 10^12/L<span> (Details: UCUM code 10*12/L = '10*12/L')</span></p><p><b>interpretation</b>: Low <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'Low'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Text</b></td></tr><tr><td>*</td><td> 12-14 y Male: 4.4 - 5.2  x  10^12/L ; 12-14 y Female: 4.2 - 4.8  x  10^12/L ; 15-17 y Male: 4.6 - 5.4  x  10^12/L ; 15-17 y Female: 4.2 - 4.8  x  10^12/L ; 18-64 y Male: 4.6 - 5.4  x  10^12/L ; 18-64 y Female: 4.0 - 4.8  x  10^12/L ; 65-74 y Male: 4.3 - 5.3  x  10^12/L ; 65-74 y Female: 4.1 - 4.9  x  10^12/L       </td></tr></table></div>",
    },
    identifier: [
      {
        use: 'official',
        system: 'http://www.bmc.nl/zorgportal/identifiers/observations',
        value: '6326',
      },
    ],
    status: 'final',
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '789-8',
          display: 'Erythrocytes [#/volume] in Blood by Automated count',
        },
      ],
    },
    subject: {
      reference: 'Patient/f001',
      display: 'P. van de Heuvel',
    },
    effectivePeriod: {
      start: '2013-04-02T10:30:10+01:00',
      end: '2013-04-05T10:30:10+01:00',
    },
    issued: '2013-04-03T15:30:10+01:00',
    performer: [
      {
        reference: 'Practitioner/f005',
        display: 'A. Langeveld',
      },
    ],
    valueQuantity: {
      value: 4.12,
      unit: '10^12/L',
      system: 'http://unitsofmeasure.org',
      code: '10*12/L',
    },
    interpretation: [
      {
        coding: [
          {
            system:
              'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'L',
            display: 'Low',
          },
        ],
      },
    ],
    referenceRange: [
      {
        text:
          ' 12-14 y Male: 4.4 - 5.2  x  10^12/L ; 12-14 y Female: 4.2 - 4.8  x  10^12/L ; 15-17 y Male: 4.6 - 5.4  x  10^12/L ; 15-17 y Female: 4.2 - 4.8  x  10^12/L ; 18-64 y Male: 4.6 - 5.4  x  10^12/L ; 18-64 y Female: 4.0 - 4.8  x  10^12/L ; 65-74 y Male: 4.3 - 5.3  x  10^12/L ; 65-74 y Female: 4.1 - 4.9  x  10^12/L       ',
      },
    ],
  },
  {
    resourceType: 'Observation',
    id: 'f005',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f005</p><p><b>identifier</b>: 6327 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Hemoglobin [Mass/volume] in Blood <span>(Details : {LOINC code '718-7' = 'Hemoglobin [Mass/volume] in Blood', given as 'Hemoglobin [Mass/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 05/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 05/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 7.2 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></p><p><b>interpretation</b>: Low <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'Low'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>7.5 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></td><td>10 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></td></tr></table></div>",
    },
    identifier: [
      {
        use: 'official',
        system: 'http://www.bmc.nl/zorgportal/identifiers/observations',
        value: '6327',
      },
    ],
    status: 'final',
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '718-7',
          display: 'Hemoglobin [Mass/volume] in Blood',
        },
      ],
    },
    subject: {
      reference: 'Patient/f001',
      display: 'P. van de Heuvel',
    },
    effectivePeriod: {
      start: '2013-04-05T10:30:10+01:00',
      end: '2013-04-05T10:30:10+01:00',
    },
    issued: '2013-04-05T15:30:10+01:00',
    performer: [
      {
        reference: 'Practitioner/f005',
        display: 'A. Langeveld',
      },
    ],
    valueQuantity: {
      value: 7.2,
      unit: 'g/dl',
      system: 'http://unitsofmeasure.org',
      code: 'g/dL',
    },
    interpretation: [
      {
        coding: [
          {
            system:
              'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'L',
            display: 'Low',
          },
        ],
      },
    ],
    referenceRange: [
      {
        low: {
          value: 7.5,
          unit: 'g/dl',
          system: 'http://unitsofmeasure.org',
          code: 'g/dL',
        },
        high: {
          value: 10,
          unit: 'g/dl',
          system: 'http://unitsofmeasure.org',
          code: 'g/dL',
        },
      },
    ],
  },
  {
    resourceType: 'Observation',
    id: 'f002',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>identifier</b>: 6324 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Base excess in Blood by calculation <span>(Details : {LOINC code '11555-0' = 'Base excess in Blood by calculation', given as 'Base excess in Blood by calculation'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 12.6 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>7.1 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>11.2 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>",
    },
    identifier: [
      {
        use: 'official',
        system: 'http://www.bmc.nl/zorgportal/identifiers/observations',
        value: '6324',
      },
    ],
    status: 'final',
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '11555-0',
          display: 'Base excess in Blood by calculation',
        },
      ],
    },
    subject: {
      reference: 'Patient/f001',
      display: 'P. van de Heuvel',
    },
    effectivePeriod: {
      start: '2013-04-02T10:30:10+01:00',
      end: '2013-04-05T10:30:10+01:00',
    },
    issued: '2013-04-03T15:30:10+01:00',
    performer: [
      {
        reference: 'Practitioner/f005',
        display: 'A. Langeveld',
      },
    ],
    valueQuantity: {
      value: 12.6,
      unit: 'mmol/l',
      system: 'http://unitsofmeasure.org',
      code: 'mmol/L',
    },
    interpretation: [
      {
        coding: [
          {
            system:
              'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'H',
            display: 'High',
          },
        ],
      },
    ],
    referenceRange: [
      {
        low: {
          value: 7.1,
          unit: 'mmol/l',
          system: 'http://unitsofmeasure.org',
          code: 'mmol/L',
        },
        high: {
          value: 11.2,
          unit: 'mmol/l',
          system: 'http://unitsofmeasure.org',
          code: 'mmol/L',
        },
      },
    ],
  },
  {
    resourceType: 'Observation',
    id: 'f003',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>identifier</b>: 6325 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Carbon dioxide in blood <span>(Details : {LOINC code '11557-6' = 'Carbon dioxide [Partial pressure] in Blood', given as 'Carbon dioxide in blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 6.2 kPa<span> (Details: UCUM code kPa = 'kPa')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>4.8 kPa<span> (Details: UCUM code kPa = 'kPa')</span></td><td>6.0 kPa<span> (Details: UCUM code kPa = 'kPa')</span></td></tr></table></div>",
    },
    identifier: [
      {
        use: 'official',
        system: 'http://www.bmc.nl/zorgportal/identifiers/observations',
        value: '6325',
      },
    ],
    status: 'final',
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '11557-6',
          display: 'Carbon dioxide in blood',
        },
      ],
    },
    subject: {
      reference: 'Patient/f001',
      display: 'P. van de Heuvel',
    },
    effectivePeriod: {
      start: '2013-04-02T10:30:10+01:00',
      end: '2013-04-05T10:30:10+01:00',
    },
    issued: '2013-04-03T15:30:10+01:00',
    performer: [
      {
        reference: 'Practitioner/f005',
        display: 'A. Langeveld',
      },
    ],
    valueQuantity: {
      value: 6.2,
      unit: 'kPa',
      system: 'http://unitsofmeasure.org',
      code: 'kPa',
    },
    interpretation: [
      {
        coding: [
          {
            system:
              'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'H',
            display: 'High',
          },
        ],
      },
    ],
    referenceRange: [
      {
        low: {
          value: 4.8,
          unit: 'kPa',
          system: 'http://unitsofmeasure.org',
          code: 'kPa',
        },
        high: {
          value: 6.0,
          unit: 'kPa',
          system: 'http://unitsofmeasure.org',
          code: 'kPa',
        },
      },
    ],
  },
  {
    resourceType: 'Observation',
    id: 'f204',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f204</p><p><b>identifier</b>: 1304-03720-Creatinine</p><p><b>status</b>: final</p><p><b>code</b>: Creatinine(Serum) <span>(Details : {https://intranet.aumc.nl/labtestcodes code '20005' = '20005', given as 'Creatinine(Serum)'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 04/04/2013 2:34:00 PM</p><p><b>performer</b>: <a>Luigi Maas</a></p><p><b>value</b>: 122 umol/L<span> (Details: SNOMED CT code 258814008 = 'umol/L')</span></p><p><b>interpretation</b>: Serum creatinine raised <span>(Details : {SNOMED CT code '166717003' = 'Serum creatinine raised', given as 'Serum creatinine raised'}; {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>64</td><td>104</td><td>Normal Range <span>(Details : {http://terminology.hl7.org/CodeSystem/referencerange-meaning code 'normal' = 'Normal Range', given as 'Normal Range'})</span></td></tr></table></div>",
    },
    identifier: [
      {
        system: 'https://intranet.aumc.nl/labvalues',
        value: '1304-03720-Creatinine',
      },
    ],
    status: 'final',
    code: {
      coding: [
        {
          system: 'https://intranet.aumc.nl/labtestcodes',
          code: '20005',
          display: 'Creatinine(Serum)',
        },
      ],
    },
    subject: {
      reference: 'Patient/f201',
      display: 'Roel',
    },
    issued: '2013-04-04T14:34:00+01:00',
    performer: [
      {
        reference: 'Practitioner/f202',
        display: 'Luigi Maas',
      },
    ],
    valueQuantity: {
      value: 122,
      unit: 'umol/L',
      system: 'http://snomed.info/sct',
      code: '258814008',
    },
    interpretation: [
      {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '166717003',
            display: 'Serum creatinine raised',
          },
          {
            system:
              'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'H',
          },
        ],
      },
    ],
    referenceRange: [
      {
        low: {
          value: 64,
        },
        high: {
          value: 104,
        },
        type: {
          coding: [
            {
              system:
                'http://terminology.hl7.org/CodeSystem/referencerange-meaning',
              code: 'normal',
              display: 'Normal Range',
            },
          ],
        },
      },
    ],
  },
  {
    resourceType: 'Observation',
    id: 'f205',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f205</p><p><b>identifier</b>: 1304-03720-eGFR</p><p><b>status</b>: final</p><p><b>code</b>: Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD) <span>(Details : {LOINC code '33914-3' = 'Glomerular filtration rate/1.73 sq M.predicted by Creatinine-based formula (MDRD)', given as 'Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 04/04/2013 2:34:00 PM</p><p><b>performer</b>: <a>Luigi Maas</a></p><p><b>interpretation</b>: interpretation of results should be assigned based upon the level of kindey function <span>(Details )</span></p><p><b>note</b>: GFR estimating equations developed by the Modification of Diet in Renal Disease (MDRD) Study Group and the Chronic Kidney Disease Epidemiology Collaboration (CKD-EPI)....</p><p><b>method</b>: MDRD <span>(Details : {SNOMED CT code '702668005' = 'Modification of diet in renal disease formula', given as 'MDRD'})</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Glomerular filtration rate/1.73 sq M predicted among blacks [Volume Rate/?Area] in Serum or Plasma by Creatinine-based formula (MDRD) <span>(Details : {LOINC code '48643-1' = 'Glomerular filtration rate/1.73 sq M predicted among blacks by Creatinine-based formula (MDRD)', given as 'Glomerular filtration rate/1.73 sq M predicted among blacks [Volume Rate/?Area] in Serum or Plasma by Creatinine-based formula (MDRD)'})</span></p><p><b>value</b>: &gt;60 mL/min/1.73m2<span> (Details: UCUM code mL/min/{1.73_m2} = 'mL/min/{1.73_m2}')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Glomerular filtration rate/1.73 sq M predicted among non-blacks [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD) <span>(Details : {LOINC code '48642-3' = 'Glomerular filtration rate/1.73 sq M predicted among non-blacks by Creatinine-based formula (MDRD)', given as 'Glomerular filtration rate/1.73 sq M predicted among non-blacks [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)'})</span></p><p><b>value</b>: 60 mL/min/1.73m2<span> (Details: UCUM code mL/min/{1.73_m2} = 'mL/min/{1.73_m2}')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></div>",
    },
    identifier: [
      {
        system: 'https://intranet.aumc.nl/labvalues',
        value: '1304-03720-eGFR',
      },
    ],
    status: 'final',
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '33914-3',
          display:
            'Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)',
        },
      ],
    },
    subject: {
      reference: 'Patient/f201',
      display: 'Roel',
    },
    issued: '2013-04-04T14:34:00+01:00',
    performer: [
      {
        reference: 'Practitioner/f202',
        display: 'Luigi Maas',
      },
    ],
    interpretation: [
      {
        text:
          'interpretation of results should be assigned based upon the level of kindey function',
      },
    ],
    note: [
      {
        text:
          'GFR estimating equations developed by the Modification of Diet in Renal Disease (MDRD) Study Group and the Chronic Kidney Disease Epidemiology Collaboration (CKD-EPI)....',
      },
    ],
    method: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '702668005',
          display: 'MDRD',
        },
      ],
    },
    component: [
      {
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '48643-1',
              display:
                'Glomerular filtration rate/1.73 sq M predicted among blacks [Volume Rate/?Area] in Serum or Plasma by Creatinine-based formula (MDRD)',
            },
          ],
        },
        valueQuantity: {
          value: 60,
          comparator: '>',
          unit: 'mL/min/1.73m2',
          system: 'http://unitsofmeasure.org',
          code: 'mL/min/{1.73_m2}',
        },
        referenceRange: [
          {
            low: {
              value: 60,
              unit: 'mL/min/1.73m2',
              system: 'http://unitsofmeasure.org',
              code: 'mL/min/{1.73_m2}',
            },
            appliesTo: [
              {
                text: 'non-black/african-american',
              },
            ],
            age: {
              low: {
                value: 18,
                unit: 'yrs',
                system: 'http://unitsofmeasure.org',
                code: 'a',
              },
            },
          },
        ],
      },
      {
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '48642-3',
              display:
                'Glomerular filtration rate/1.73 sq M predicted among non-blacks [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)',
            },
          ],
        },
        valueQuantity: {
          value: 60,
          unit: 'mL/min/1.73m2',
          system: 'http://unitsofmeasure.org',
          code: 'mL/min/{1.73_m2}',
        },
        referenceRange: [
          {
            low: {
              value: 60,
              unit: 'mL/min/1.73m2',
              system: 'http://unitsofmeasure.org',
              code: 'mL/min/{1.73_m2}',
            },
            age: {
              low: {
                value: 18,
                unit: 'yrs',
                system: 'http://unitsofmeasure.org',
                code: 'a',
              },
            },
          },
        ],
      },
    ],
  },
  {
    resourceType: 'Observation',
    id: 'f206',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f206</p><p><b>status</b>: final</p><p><b>code</b>: Blood culture <span>(Details : {http://acmelabs.org code '104177' = '104177', given as 'Blood culture'}; {LOINC code '600-7' = 'Bacteria identified in Blood by Culture', given as 'Bacteria identified in Blood by Culture'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 11/03/2013 10:28:00 AM</p><p><b>performer</b>: <a>Luigi Maas</a></p><p><b>value</b>: Staphylococcus aureus <span>(Details : {SNOMED CT code '3092008' = 'Staphylococcus aureus', given as 'Staphylococcus aureus'})</span></p><p><b>interpretation</b>: Positive <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'POS' = 'Positive)</span></p><p><b>method</b>: Blood culture for bacteria, including anaerobic screen <span>(Details : {SNOMED CT code '104177005' = 'Blood culture for bacteria, including anaerobic screen', given as 'Blood culture for bacteria, including anaerobic screen'})</span></p></div>",
    },
    status: 'final',
    code: {
      coding: [
        {
          system: 'http://acmelabs.org',
          code: '104177',
          display: 'Blood culture',
        },
        {
          system: 'http://loinc.org',
          code: '600-7',
          display: 'Bacteria identified in Blood by Culture',
        },
      ],
    },
    subject: {
      reference: 'Patient/f201',
      display: 'Roel',
    },
    issued: '2013-03-11T10:28:00+01:00',
    performer: [
      {
        reference: 'Practitioner/f202',
        display: 'Luigi Maas',
      },
    ],
    valueCodeableConcept: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '3092008',
          display: 'Staphylococcus aureus',
        },
      ],
    },
    interpretation: [
      {
        coding: [
          {
            system:
              'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'POS',
          },
        ],
      },
    ],
    method: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '104177005',
          display: 'Blood culture for bacteria, including anaerobic screen',
        },
      ],
    },
  },
  {
    resourceType: 'Observation',
    id: 'f202',
    text: {
      status: 'generated',
      div:
        "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>status</b>: entered-in-error</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Temperature <span>(Details : {http://acme.lab code 'BT' = 'BT', given as 'Body temperature'}; {LOINC code '8310-5' = 'Body temperature', given as 'Body temperature'}; {LOINC code '8331-1' = 'Oral temperature', given as 'Oral temperature'}; {SNOMED CT code '56342008' = 'Temperature taking', given as 'Temperature taking'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 04/04/2013 1:27:00 PM</p><p><b>performer</b>: <a>Practitioner/f201</a></p><p><b>value</b>: 39 degrees C<span> (Details: UCUM code Cel = 'Cel')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><p><b>bodySite</b>: Oral cavity <span>(Details : {SNOMED CT code '74262004' = 'Oral cavity', given as 'Oral cavity'})</span></p><p><b>method</b>: Oral temperature taking <span>(Details : {SNOMED CT code '89003005' = 'Oral temperature taking', given as 'Oral temperature taking'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>High</b></td></tr><tr><td>*</td><td>38.2 degrees C</td></tr></table></div>",
    },
    status: 'entered-in-error',
    category: [
      {
        coding: [
          {
            system:
              'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'vital-signs',
            display: 'Vital Signs',
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: 'http://acme.lab',
          code: 'BT',
          display: 'Body temperature',
        },
        {
          system: 'http://loinc.org',
          code: '8310-5',
          display: 'Body temperature',
        },
        {
          system: 'http://loinc.org',
          code: '8331-1',
          display: 'Oral temperature',
        },
        {
          system: 'http://snomed.info/sct',
          code: '56342008',
          display: 'Temperature taking',
        },
      ],
      text: 'Temperature',
    },
    subject: {
      reference: 'Patient/f201',
      display: 'Roel',
    },
    issued: '2013-04-04T13:27:00+01:00',
    performer: [
      {
        reference: 'Practitioner/f201',
      },
    ],
    valueQuantity: {
      value: 39,
      unit: 'degrees C',
      system: 'http://unitsofmeasure.org',
      code: 'Cel',
    },
    interpretation: [
      {
        coding: [
          {
            system:
              'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'H',
          },
        ],
      },
    ],
    bodySite: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '74262004',
          display: 'Oral cavity',
        },
      ],
    },
    method: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '89003005',
          display: 'Oral temperature taking',
        },
      ],
    },
    referenceRange: [
      {
        high: {
          value: 38.2,
          unit: 'degrees C',
        },
      },
    ],
  },
]
