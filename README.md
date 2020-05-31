# Instagram Profile Scraper

[![GitHub Last commit](https://badgen.net/github/last-commit/nazmulb/instagram-profile-scraper)](https://github.com/nazmulb/instagram-profile-scraper)
[![GitHub commits](https://badgen.net/github/commits/nazmulb/instagram-profile-scraper)](https://github.com/nazmulb/instagram-profile-scraper/commits/master)
[![GitHub stars](https://badgen.net/github/stars/nazmulb/instagram-profile-scraper)](https://github.com/nazmulb/instagram-profile-scraper)

Scrape and analyze Instagram profiles to show relevant data in the UI.

Overview:

- **API:** provide an endpoint to scrape and analyze profiles from Instagram.
- **UI:** list all the viewable profiles that are scraped and show the details of the individual profile.

I used `node.js`, `nestJS`, `typescript`, `typeorm` & `MySql` for back-end API. And `vue.js`, `vuex`, `bootstrap` & `SCSS` for UI. I also used `docker-compose` `eslint` and `prettier`.

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
