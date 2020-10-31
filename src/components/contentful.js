import React from "react";
import * as Contentful from "contentful";
import { API_SPACE_ID, API_TOKEN } from "../env";

const contentfulClient = Contentful.createClient({
  space: API_SPACE_ID,
  accessToken: API_TOKEN,
});

const getContentfulEntries = contentfulClient.getEntries;

export default contentfulClient;
export { getContentfulEntries };
