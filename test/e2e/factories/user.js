const { Factory } = require('rosie')
const { address, internet, name, random } = require('faker')

module.exports = new Factory()
  .sequence('id')
  .attrs({ email: () => internet.email(),
    number: () => random.number(),
    local_venue: {
      name: () => address.streetName()
    },
    first_names: () => name.firstName(),
    last_names: () => name.lastName(),
    title: () => name.prefix(),
    address1: () => address.streetName(),
    address2: () => address.streetName(),
    address3: () => null,
    town: () => address.city(),
    county: () => address.county(),
    post_code: () => address.zipCode(),
    country: () => address.country(),
    manager: () => random.boolean(),
    token: () => random.uuid(),
    paymentDetails: {
      card_type: () => random.arrayElement(['visa', 'mastercard']),
      expiry: '2001',
      last4: '1111',
      type: 'card'
    }
  })
