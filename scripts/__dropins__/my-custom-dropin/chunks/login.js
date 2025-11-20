/*! Copyright 2025 Adobe
All Rights Reserved. */
import{FetchGraphQL as h}from"@dropins/tools/fetch-graphql.js";const{setEndpoint:m,setFetchGraphQlHeader:p,removeFetchGraphQlHeader:l,setFetchGraphQlHeaders:E,fetchGraphQl:i,getConfig:d}=new h().getMethods(),c=`
  mutation GET_CUSTOMER_TOKEN($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`,w=async({email:o,password:n})=>{var t,a,s;const e=await i(c,{variables:{email:o,password:n}});if((t=e.errors)!=null&&t.length)throw new Error(e.errors[0].message);const r=(s=(a=e.data)==null?void 0:a.generateCustomerToken)==null?void 0:s.token;if(!r)throw new Error("Unable to generate a customer token. Please try again.");return r};export{p as a,E as b,d as c,i as f,w as g,l as r,m as s};
//# sourceMappingURL=login.js.map
