export const patients = [
  {
    resourceType: 'Patient',
    name: [
      {
        text: 'Cersi Lannister',
        prefix: [''],
        family: ['Lannister'],
        given: ['Cersi'],
        suffix: [''],
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
    deceasedBoolean: false,
    multipleBirthBoolean: false,
    maritalStatus: {
      text: 'widow',
    },
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
  },
  {
    resourceType: 'Patient',
    name: [
      {
        text: 'Jamie Lannister',
        prefix: [''],
        family: ['Lannister'],
        given: ['Jamie'],
        suffix: [''],
        resourceType: 'HumanName',
      },
    ],
    active: true,
    birthDate: '1970-07-27',
    gender: 'male',
    photo: [
      {
        url:
          'https://img.buzzfeed.com/buzzfeed-static/static/2019-05/8/14/campaign_images/buzzfeed-prod-web-06/lets-talk-about-jaime-lannisters-betrayal-on-game-2-20101-1557340321-6_dblbig.jpg',
      },
    ],
    telecom: [
      {
        use: 'home',
      },
      {
        system: 'phone',
        value: '(903) 555-6474',
        use: 'work',
      },
      {
        system: 'email',
        value: 'jamie.lannister@casterlyrock.io',
        use: 'home',
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
        value: 'HS65256-7',
      },
    ],
    deceasedBoolean: false,
    multipleBirthBoolean: false,
    maritalStatus: {
      text: 'single',
    },
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
  },
]
