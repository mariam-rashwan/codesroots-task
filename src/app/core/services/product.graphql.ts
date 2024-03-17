import {gql} from 'apollo-angular'

const GET_PRODUCTS = gql`
  query {
    products (category_id:"50"){
      id
      name_en
      photo
      short_description_en
      price
      attributes {
        id
    }
    category{
      name_en
        id
    }
    }
  }
`




export {GET_PRODUCTS}