  console.log("promises with then and catch")


 function fetchData() {
    return new Promise((resolve, reject) => {      
    setTimeout(() => {

        const success = true; 
        if (success) {
          resolve("data fetched successfull"); 
        } else {
          reject("error fetching data.");
        }
      }, 1000);
    });
  }


    fetchData()
    .then((data) => {
      console.log(data); 
      })
    .catch((error) => {
      console.error(error); 
    });

    function fetchData() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const success = true;
            if (success) {
              resolve("data fetched successfully");
            } else {
              reject("error fetching data.");
            }
          }, 2000);
        });
      }
      
      function processData(data) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const processedData = data + " processed";
            resolve(processedData);
          }, 2000);
        });
      }


    
        fetchData()
        .then((data) => {
          console.log(data); 
                    return processData(data); 
        })
        
        .then((processedData) => {
          console.log(processedData);
          })
        .catch((error) => {
          console.error(error); 
        });
      
       