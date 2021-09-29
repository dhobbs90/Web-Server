const verifyApiKey = () => {
  if(process.env.API_KEY){
    return true
  }
  else{
    console.error(`\FATAL ERROR: Failed to find the API_KEY in our .env file  please create it with the following format and store your weatherstack.com api key\n\
      #${process.cwd()}\\.env\n\
      API_KEY=12345676890`)
    return false
  }
  
}

module.exports = verifyApiKey