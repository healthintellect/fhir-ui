export const patient = {
  resourceType: 'Patient',
  name: [
    {
      text: 'Cersi Lannister',
      prefix: ['Queen'],
      family: ['Lannister'],
      given: ['Cersi'],
      suffix: ['Baratheon'],
      resourceType: 'HumanName',
    },
  ],
  active: true,
  birthDate: '1973-10-03',
  gender: 'female',
  photo: [
    {
      url:
        'http://images6.fanpop.com/image/photos/37200000/cersei-baratheon-cersei-lannister-37237651-793-1058.png',
    },
  ],
  identifier: [
    {
      use: 'usual',
      type: {
        coding: [
          {
            system: 'http://hl7.org/fhir/v2/0203',
            code: 'MR',
          },
        ],
      },
      value: 'HS65256-6',
    },
  ],
  deceasedBoolean: true,
  multipleBirthBoolean: true,
  maritalStatus: {
    text: 'widow',
  },
  telecom: [
    {
      use: 'home',
    },
    {
      system: 'phone',
      value: '(903) 555-6473',
      use: 'work',
    },
    {
      system: 'email',
      value: 'cersi.lannister@redkeep.io',
      use: 'home',
    },
  ],
  address: [
    {
      use: 'home',
      type: 'both',
      text: '534 Red Keep Ct Kings Landing, Seven Kingdoms  3999',
      line: ['534 Red Keep Ct'],
      city: 'Kings Landing',
      state: 'Seven Kingdoms',
      postalCode: '3999',
      period: {
        start: '1974-12-25',
      },
    },
  ],
  animal: {
    species: {
      text: 'Human',
    },
  },
  communication: [
    {
      language: {
        text: 'English',
      },
    },
  ],
  careProvider: [
    {
      display: '',
      reference: '',
    },
  ],
  managingOrganization: {
    reference: '',
    display: '',
  },
}
