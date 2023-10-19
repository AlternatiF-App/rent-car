import request, { gql } from 'graphql-request'

const MASTER_URL='https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clnu36o1m1elv01un0pgw1ycl/master'

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        seat
        updatedAt
        carType
        image {
          url
        }
        carBrand
      }
    }
  `

  const result = await request(MASTER_URL, query) 
  return result
}

export const getStoreLocations = async () => {
  const query=gql`
  query storeLocation {
    storesLocations {
      address
    }
  }  
  `
  const result = await request(MASTER_URL, query)
  return result
}


export const createBooking = async (formValue:any) => {
  const mutationQuery=gql`
    mutation MyMutation {
      createBooking(
        data: {
          carId: {connect: {id: "`+formValue.carId+`"}},
          contactNumber: "`+formValue.contactNumber+`",
          dropOffDate: "`+formValue.dropOffDate+`",
          dropOffTime: "`+formValue.dropOffTime+`",
          pickUpDate: "`+formValue.pickUpDate+`",
          pickUpTime: "`+formValue.pickUpTime+`",
          userName: "`+formValue.userName+`"
        }
      ) {
        id
      }
    }
  `

  const result = await request(MASTER_URL, mutationQuery)
  return result
}