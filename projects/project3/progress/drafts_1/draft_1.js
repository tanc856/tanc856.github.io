

const airtableApiKey = "keyOIp9wOnn8B5nk8";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/app2XuYjq81zafdJb/Raye's%20collection";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

//  DOM REFERENCES
const photographContainerElement = document.querySelector("#photograph");


const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})

jsonPromise.then((data) => {
    const records = data.records 
    for (let index = 0; index < records.length; index++) {
        const attachmentUrl = records[index].fields.Attachments[0].url
        // Create Image Element
        const imageElement = document.createElement('img')
        imageElement.classList.add('attachment')
        imageElement.setAttribute('src', attachmentUrl)
        // Add Image Element to the Container Element
        photographContainerElement.appendChild(imageElement)
    }
})