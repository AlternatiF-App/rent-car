import request, { gql } from 'graphql-request'

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
      }
    }
  `

  const result = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clnu36o1m1elv01un0pgw1ycl/master', query) 
  return result
}