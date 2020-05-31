# Instagram Profile Scraper

[![GitHub Last commit](https://badgen.net/github/last-commit/nazmulb/instagram-profile-scraper)](https://github.com/nazmulb/instagram-profile-scraper)
[![GitHub commits](https://badgen.net/github/commits/nazmulb/instagram-profile-scraper)](https://github.com/nazmulb/instagram-profile-scraper/commits/master)
[![GitHub stars](https://badgen.net/github/stars/nazmulb/instagram-profile-scraper)](https://github.com/nazmulb/instagram-profile-scraper)

Scrape and analyze Instagram profiles to show relevant data in the UI.

Overview:

- **API:** provide an endpoint to scrape and analyze profiles from Instagram.
    - detect popular #hashtags and @mentions from post.
    - detect and analyze brand affinity and interests from post descriptions and post images using NLP and ML service.
    - calculate engagement and engagement rate.
- **UI:** list all the viewable profiles that are scraped and show the details of the individual profile.

Used `node.js`, `nestJS`, `typescript`, `typeorm`, `MySql` `docker-compose` & `eslint` for back-end API. And `vue.js`, `vuex`, `bootstrap`, `SCSS` & `docker-compose`, `eslint`, `prettier` for UI. Also used Google <a href="https://cloud.google.com/vision">Vision API</a> for parsing text from image and <a href="https://cloud.google.com/natural-language">NL API</a> for natural language processing.

<img alt="List all the viewable profiles" src="https://raw.githubusercontent.com/nazmulb/instagram-profile-scraper/master/images/list.png" width="882px" />

<img alt="Details of the individual profile" src="https://raw.githubusercontent.com/nazmulb/instagram-profile-scraper/master/images/details.png" width="882px" />

### Setup:

Please clone this repo:

```sh
git clone https://github.com/nazmulb/instagram-profile-scraper.git
```

Please change directory to this project: 

```sh
cd instagram-profile-scraper
```

Please set the environment variable `API_KEY_GCP` from `docker-compose.yml` file.

### Run the App:

```sh
docker-compose up
```

### Open your browser and use the below URL:
`http://localhost:8080/`
