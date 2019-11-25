const APP_ENV = process.env.APP_ENV;
const env = { api_url: "", internal_api_url: "" }
if (APP_ENV === "prod") {
  env.api_url = "http://localhost:3001";
  env.internal_api_url = "http://localhost:3001";
} else if(APP_ENV === "dev"){
  env.api_url = "http://localhost:3001";
  env.internal_api_url = "http://localhost:3001";
} else {
  env.api_url = "http://localhost:3001";
  env.internal_api_url = "http://localhost:3001";
}

export default env;
