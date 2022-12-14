export const PRODUCT_QUERY = `query {
    products {
      data {
        attributes {
          title,
          description,
          slug,
          price
          image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }`;

export const GET_PRODUCT_QUERY = `
query getProduct($slug: String!){
    products(filters:{slug: {eq: $slug}}){
       data{
        attributes{
            title,
            description,
            slug,
            price,
            image{
                data{
                    attributes{
                        url
                    }
                }
            }
        }
       }
    }
}`;

export const EVENT_QUERY = `query {
  events {
    data{
      attributes{
        title,
        date,
        image{
          data{
            attributes{
              url
            }
          }
        },
        description,
        slug,
        link
      }
    }
  }
}`;
